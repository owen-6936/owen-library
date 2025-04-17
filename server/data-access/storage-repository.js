const drivelist = require('drivelist');
const { exec } = require('child_process');
const { promisify } = require('util');

async function getAvailableDrives() {
    try {
        const driveList = [];
        (await drivelist.list()).forEach(drive => {
            driveList.push({ device: drive.device, path: drive.mountpoints[0].path.replaceAll("\\", "/"), description: drive.description, size: drive.size, isSystem: drive.isSystem, isCard: drive.isCard, isUsb: drive.isUSB, isRemovable: drive.isRemovable })
        });
        return driveList;
    } catch (error) {
        console.error("Error getting drive list:", error);
        throw error;
    }
}

module.exports = {
    getAvailableDrives,
};

const execAsync = promisify(exec);

async function getDiskUsage(path) {
    try {
        let command;
        if (process.platform === 'win32') {
            command = `Get-WmiObject -Class Win32_LogicalDisk -Filter "DeviceID='${path}'" | Select-Object Size, FreeSpace | ConvertTo-Json`;
            const { stdout, stderr } = await execAsync(command, { shell: 'powershell.exe' });
            try {
                const data = JSON.parse(stdout);
                console.log(data)
                if (data) {
                    const total = data.Size;
                    const free = data.FreeSpace;
                    const used = total - free;
                    const percentage = ((used / total) * 100).toFixed(2) + '%';
                    return {
                        used: (used / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
                        available: (free / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
                        total: (total / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
                        percentage,
                    };
                }
                return null;
            } catch (parseError) {
                console.error('Error parsing PowerShell output:', parseError, stdout);
                return null;
            }
        } else if (process.platform === 'darwin' || process.platform === 'linux') {
            command = `df -h "${path}"`;
            const { stdout } = await execAsync(command);
            const lines = stdout.trim().split('\n');
            if (lines.length < 2) {
                return null;
            }
            const data = lines[1].split(/\s+/).filter(item => item !== '');
            if (data.length >= 5) {
                return {
                    used: data[2],
                    available: data[3],
                    total: data[1],
                    percentage: data[4],
                };
            }
            return null;
        } else {
            console.warn(`Unsupported operating system: ${process.platform}`);
            return null;
        }
    } catch (error) {
        console.error(`Error getting disk usage for ${path}:`, error);
        return null;
    }
}

module.exports = { getDiskUsage };