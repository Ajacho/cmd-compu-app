export const commands = [

  // ─── NAVIGATION ───────────────────────────────────────────────
  {
    id: 'print-working-directory',
    title: 'Print working directory',
    desc: 'Shows the full path of the directory you are currently in.',
    category: 'navigation',
    difficulty: 1,
    linux: {
      command: 'pwd',
      usage: 'pwd',
      realworldsample: 'pwd',
      aliases: [],
      tip: 'Use this whenever you feel lost — it tells you exactly where you are.'
    },
    mac: {
      command: 'pwd',
      usage: 'pwd',
      realworldsample: 'pwd',
      aliases: [],
      tip: 'Same as Linux. Works in zsh and bash.'
    },
    windows: {
      command: 'cd',
      usage: 'cd',
      realworldsample: 'cd',
      aliases: [],
      tip: 'Running cd with no arguments prints the current directory in CMD.'
    },
    powershell: {
      command: 'Get-Location',
      usage: 'Get-Location',
      realworldsample: 'Get-Location',
      aliases: ['pwd', 'gl'],
      tip: 'pwd works in PowerShell too — it is an alias for Get-Location.'
    }
  },

  {
    id: 'change-directory',
    title: 'Change directory',
    desc: 'Move into a different folder.',
    category: 'navigation',
    difficulty: 1,
    linux: {
      command: 'cd',
      usage: 'cd [directory]',
      realworldsample: 'cd /var/log',
      aliases: [],
      tip: 'cd .. goes up one level. cd ~ takes you home.'
    },
    mac: {
      command: 'cd',
      usage: 'cd [directory]',
      realworldsample: 'cd ~/Documents',
      aliases: [],
      tip: 'cd - takes you back to the previous directory.'
    },
    windows: {
      command: 'cd',
      usage: 'cd [directory]',
      realworldsample: 'cd C:\\Users\\User\\Documents',
      aliases: ['chdir'],
      tip: 'Use cd .. to go up. Use cd \\ to go to the root of the drive.'
    },
    powershell: {
      command: 'Set-Location',
      usage: 'Set-Location [directory]',
      realworldsample: 'Set-Location C:\\Users\\User\\Documents',
      aliases: ['cd', 'sl', 'chdir'],
      tip: 'cd works as an alias. Use .. to go up a level.'
    }
  },

  {
    id: 'list-files',
    title: 'List files and folders',
    desc: 'Display the contents of a directory.',
    category: 'navigation',
    difficulty: 1,
    linux: {
      command: 'ls',
      usage: 'ls [options] [directory]',
      realworldsample: 'ls -la /home/user',
      aliases: [],
      tip: '-l shows details, -a shows hidden files, -h makes sizes human-readable.'
    },
    mac: {
      command: 'ls',
      usage: 'ls [options] [directory]',
      realworldsample: 'ls -la ~/Documents',
      aliases: [],
      tip: 'Add -G to colorize output by file type.'
    },
    windows: {
      command: 'dir',
      usage: 'dir [options] [directory]',
      realworldsample: 'dir /a C:\\Users\\User',
      aliases: [],
      tip: '/a shows hidden files. /s lists subdirectories too.'
    },
    powershell: {
      command: 'Get-ChildItem',
      usage: 'Get-ChildItem [directory]',
      realworldsample: 'Get-ChildItem -Path C:\\Users -Force',
      aliases: ['ls', 'dir', 'gci'],
      tip: '-Force shows hidden files. -Recurse lists all subdirectories.'
    }
  },

  {
    id: 'clear-screen',
    title: 'Clear the screen',
    desc: 'Clears all text from the terminal window.',
    category: 'navigation',
    difficulty: 1,
    linux: {
      command: 'clear',
      usage: 'clear',
      realworldsample: 'clear',
      aliases: [],
      tip: 'Ctrl + L does the same thing without typing.'
    },
    mac: {
      command: 'clear',
      usage: 'clear',
      realworldsample: 'clear',
      aliases: [],
      tip: 'Cmd + K also clears the terminal in most Mac apps.'
    },
    windows: {
      command: 'cls',
      usage: 'cls',
      realworldsample: 'cls',
      aliases: [],
      tip: 'Only works in CMD. In PowerShell use clear instead.'
    },
    powershell: {
      command: 'Clear-Host',
      usage: 'Clear-Host',
      realworldsample: 'Clear-Host',
      aliases: ['clear', 'cls'],
      tip: 'cls and clear both work as aliases.'
    }
  },

  // ─── FILE OPERATIONS ──────────────────────────────────────────
  {
    id: 'create-file',
    title: 'Create an empty file',
    desc: 'Creates a new empty file without opening an editor.',
    category: 'file-operations',
    difficulty: 1,
    linux: {
      command: 'touch',
      usage: 'touch [filename]',
      realworldsample: 'touch notes.txt',
      aliases: [],
      tip: 'If the file already exists, touch updates its timestamp instead.'
    },
    mac: {
      command: 'touch',
      usage: 'touch [filename]',
      realworldsample: 'touch notes.txt',
      aliases: [],
      tip: 'You can create multiple files at once: touch a.txt b.txt c.txt'
    },
    windows: {
      command: 'echo. >',
      usage: 'echo. > [filename]',
      realworldsample: 'echo. > notes.txt',
      aliases: [],
      tip: 'The dot after echo prevents writing "ECHO is on" into the file.'
    },
    powershell: {
      command: 'New-Item',
      usage: 'New-Item -ItemType File -Name [filename]',
      realworldsample: 'New-Item -ItemType File -Name notes.txt',
      aliases: ['ni'],
      tip: 'ni is the short alias. Add -Force to overwrite if the file exists.'
    }
  },

  {
    id: 'create-directory',
    title: 'Create a directory',
    desc: 'Makes a new folder.',
    category: 'file-operations',
    difficulty: 1,
    linux: {
      command: 'mkdir',
      usage: 'mkdir [directory]',
      realworldsample: 'mkdir projects',
      aliases: [],
      tip: 'Use -p to create nested folders at once: mkdir -p a/b/c'
    },
    mac: {
      command: 'mkdir',
      usage: 'mkdir [directory]',
      realworldsample: 'mkdir ~/projects',
      aliases: [],
      tip: '-p creates parent directories if they do not exist yet.'
    },
    windows: {
      command: 'mkdir',
      usage: 'mkdir [directory]',
      realworldsample: 'mkdir C:\\projects',
      aliases: ['md'],
      tip: 'mkdir and md both work in CMD.'
    },
    powershell: {
      command: 'New-Item',
      usage: 'New-Item -ItemType Directory -Name [name]',
      realworldsample: 'New-Item -ItemType Directory -Name projects',
      aliases: ['mkdir', 'md'],
      tip: 'mkdir works as an alias here too.'
    }
  },

  {
    id: 'copy-file',
    title: 'Copy a file',
    desc: 'Duplicates a file to another location.',
    category: 'file-operations',
    difficulty: 1,
    linux: {
      command: 'cp',
      usage: 'cp [source] [destination]',
      realworldsample: 'cp notes.txt backup/notes.txt',
      aliases: [],
      tip: 'Use -r to copy entire directories: cp -r myfolder/ backup/'
    },
    mac: {
      command: 'cp',
      usage: 'cp [source] [destination]',
      realworldsample: 'cp notes.txt ~/Desktop/notes.txt',
      aliases: [],
      tip: '-r copies directories recursively.'
    },
    windows: {
      command: 'copy',
      usage: 'copy [source] [destination]',
      realworldsample: 'copy notes.txt C:\\backup\\notes.txt',
      aliases: [],
      tip: 'Use xcopy or robocopy to copy entire directories.'
    },
    powershell: {
      command: 'Copy-Item',
      usage: 'Copy-Item [source] -Destination [destination]',
      realworldsample: 'Copy-Item notes.txt -Destination C:\\backup\\',
      aliases: ['cp', 'copy', 'ci'],
      tip: 'Add -Recurse to copy folders. Add -Force to overwrite existing files.'
    }
  },

  {
    id: 'move-rename',
    title: 'Move or rename a file',
    desc: 'Moves a file to a new location, or renames it in place.',
    category: 'file-operations',
    difficulty: 1,
    linux: {
      command: 'mv',
      usage: 'mv [source] [destination]',
      realworldsample: 'mv old.txt new.txt',
      aliases: [],
      tip: 'If destination is a new name in the same folder, it renames the file.'
    },
    mac: {
      command: 'mv',
      usage: 'mv [source] [destination]',
      realworldsample: 'mv report.txt ~/Documents/report.txt',
      aliases: [],
      tip: 'mv does not have a -r flag — it moves directories as-is.'
    },
    windows: {
      command: 'move',
      usage: 'move [source] [destination]',
      realworldsample: 'move old.txt C:\\archive\\old.txt',
      aliases: [],
      tip: 'Use ren to rename without moving: ren old.txt new.txt'
    },
    powershell: {
      command: 'Move-Item',
      usage: 'Move-Item [source] -Destination [destination]',
      realworldsample: 'Move-Item old.txt -Destination C:\\archive\\',
      aliases: ['mv', 'move', 'mi'],
      tip: 'Rename-Item is the dedicated rename command, but Move-Item works too.'
    }
  },

  {
    id: 'delete-file',
    title: 'Delete a file',
    desc: 'Permanently removes a file. Cannot be undone.',
    category: 'file-operations',
    difficulty: 1,
    linux: {
      command: 'rm',
      usage: 'rm [file]',
      realworldsample: 'rm old_notes.txt',
      aliases: [],
      tip: 'Use -i to be prompted before each deletion. Avoid rm -rf unless you are sure.'
    },
    mac: {
      command: 'rm',
      usage: 'rm [file]',
      realworldsample: 'rm old_notes.txt',
      aliases: [],
      tip: '-r deletes directories. -f forces deletion without prompts — be careful.'
    },
    windows: {
      command: 'del',
      usage: 'del [file]',
      realworldsample: 'del old_notes.txt',
      aliases: ['erase'],
      tip: 'del does not move to Recycle Bin. Use /p to confirm before deleting.'
    },
    powershell: {
      command: 'Remove-Item',
      usage: 'Remove-Item [file]',
      realworldsample: 'Remove-Item old_notes.txt',
      aliases: ['rm', 'del', 'ri'],
      tip: 'Add -Recurse to delete directories. Add -Force to skip confirmation.'
    }
  },

  // ─── FILE VIEWING ─────────────────────────────────────────────
  {
    id: 'view-file-contents',
    title: 'View file contents',
    desc: 'Prints the full content of a file to the terminal.',
    category: 'file-viewing',
    difficulty: 1,
    linux: {
      command: 'cat',
      usage: 'cat [file]',
      realworldsample: 'cat /etc/hosts',
      aliases: [],
      tip: 'cat is short for concatenate. You can chain files: cat a.txt b.txt'
    },
    mac: {
      command: 'cat',
      usage: 'cat [file]',
      realworldsample: 'cat ~/config.txt',
      aliases: [],
      tip: 'For large files, use less instead so you can scroll.'
    },
    windows: {
      command: 'type',
      usage: 'type [file]',
      realworldsample: 'type C:\\notes.txt',
      aliases: [],
      tip: 'type only works with text files. Use more to page through long output.'
    },
    powershell: {
      command: 'Get-Content',
      usage: 'Get-Content [file]',
      realworldsample: 'Get-Content C:\\notes.txt',
      aliases: ['cat', 'type', 'gc'],
      tip: 'Add -Tail 20 to see only the last 20 lines.'
    }
  },

  {
    id: 'scroll-file',
    title: 'Scroll through a file',
    desc: 'View a large file one screen at a time.',
    category: 'file-viewing',
    difficulty: 1,
    linux: {
      command: 'less',
      usage: 'less [file]',
      realworldsample: 'less /var/log/syslog',
      aliases: [],
      tip: 'Press q to quit, space to go forward, b to go back, / to search.'
    },
    mac: {
      command: 'less',
      usage: 'less [file]',
      realworldsample: 'less ~/logs/app.log',
      aliases: [],
      tip: 'less is better than more — it lets you scroll both ways.'
    },
    windows: {
      command: 'more',
      usage: 'more [file]',
      realworldsample: 'more C:\\logs\\app.log',
      aliases: [],
      tip: 'Press space to advance a page. more only scrolls forward.'
    },
    powershell: {
      command: 'more',
      usage: 'more [file]',
      realworldsample: 'Get-Content app.log | more',
      aliases: [],
      tip: 'Pipe output into more to page through it: Get-Content file.txt | more'
    }
  },

  {
    id: 'view-first-lines',
    title: 'View first lines of a file',
    desc: 'Shows the first N lines of a file — useful for previewing large files.',
    category: 'file-viewing',
    difficulty: 2,
    linux: {
      command: 'head',
      usage: 'head -n [number] [file]',
      realworldsample: 'head -n 20 app.log',
      aliases: [],
      tip: 'Defaults to 10 lines if you omit -n.'
    },
    mac: {
      command: 'head',
      usage: 'head -n [number] [file]',
      realworldsample: 'head -n 20 app.log',
      aliases: [],
      tip: 'Same as Linux.'
    },
    windows: {
      command: 'more +1',
      usage: 'more +[line] [file]',
      realworldsample: 'more +1 app.log',
      aliases: [],
      tip: 'CMD has no native head. Use PowerShell for easier control.'
    },
    powershell: {
      command: 'Get-Content',
      usage: 'Get-Content [file] -TotalCount [number]',
      realworldsample: 'Get-Content app.log -TotalCount 20',
      aliases: [],
      tip: '-TotalCount and -Head both work. Also: Select-Object -First 20'
    }
  },

  {
    id: 'view-last-lines',
    title: 'View last lines of a file',
    desc: 'Shows the most recent lines — essential for reading logs.',
    category: 'file-viewing',
    difficulty: 2,
    linux: {
      command: 'tail',
      usage: 'tail -n [number] [file]',
      realworldsample: 'tail -n 50 /var/log/syslog',
      aliases: [],
      tip: 'tail -f follows the file live as new lines are written — great for logs.'
    },
    mac: {
      command: 'tail',
      usage: 'tail -n [number] [file]',
      realworldsample: 'tail -f ~/logs/app.log',
      aliases: [],
      tip: '-f is extremely useful for watching live server logs.'
    },
    windows: {
      command: 'more',
      usage: '(no native tail in CMD)',
      realworldsample: '',
      aliases: [],
      tip: 'CMD has no tail equivalent. Switch to PowerShell for this.'
    },
    powershell: {
      command: 'Get-Content',
      usage: 'Get-Content [file] -Tail [number]',
      realworldsample: 'Get-Content app.log -Tail 50',
      aliases: [],
      tip: 'Add -Wait to follow the file live, like tail -f on Linux.'
    }
  },

  // ─── SEARCH ───────────────────────────────────────────────────
  {
    id: 'search-in-file',
    title: 'Search text inside a file',
    desc: 'Find lines containing a specific word or pattern.',
    category: 'search',
    difficulty: 2,
    linux: {
      command: 'grep',
      usage: 'grep [pattern] [file]',
      realworldsample: 'grep "error" /var/log/syslog',
      aliases: [],
      tip: '-i makes the search case-insensitive. -r searches recursively in a folder.'
    },
    mac: {
      command: 'grep',
      usage: 'grep [pattern] [file]',
      realworldsample: 'grep -i "error" ~/logs/app.log',
      aliases: [],
      tip: '-n shows line numbers. -r searches all files in a directory.'
    },
    windows: {
      command: 'findstr',
      usage: 'findstr [pattern] [file]',
      realworldsample: 'findstr "error" app.log',
      aliases: [],
      tip: '/i makes it case-insensitive. /s searches subdirectories too.'
    },
    powershell: {
      command: 'Select-String',
      usage: 'Select-String -Pattern [pattern] -Path [file]',
      realworldsample: 'Select-String -Pattern "error" -Path app.log',
      aliases: ['sls'],
      tip: '-CaseSensitive makes the match strict. Pipe output from Get-Content too.'
    }
  },

  {
    id: 'find-file',
    title: 'Find a file by name',
    desc: 'Locate a file anywhere on the system.',
    category: 'search',
    difficulty: 2,
    linux: {
      command: 'find',
      usage: 'find [path] -name [filename]',
      realworldsample: 'find /home -name "*.log"',
      aliases: [],
      tip: 'Use wildcards: find . -name "*.txt" finds all text files from here.'
    },
    mac: {
      command: 'find',
      usage: 'find [path] -name [filename]',
      realworldsample: 'find ~/Documents -name "report*"',
      aliases: [],
      tip: 'mdfind is faster on Mac as it uses Spotlight: mdfind -name notes.txt'
    },
    windows: {
      command: 'dir /s',
      usage: 'dir /s [filename]',
      realworldsample: 'dir /s *.log',
      aliases: [],
      tip: '/b shows bare filenames only, without extra info.'
    },
    powershell: {
      command: 'Get-ChildItem',
      usage: 'Get-ChildItem -Recurse -Filter [filename]',
      realworldsample: 'Get-ChildItem -Recurse -Filter *.log',
      aliases: ['ls', 'dir'],
      tip: '-ErrorAction SilentlyContinue hides permission errors while searching.'
    }
  },

  // ─── PERMISSIONS ──────────────────────────────────────────────
  {
    id: 'change-permissions',
    title: 'Change file permissions',
    desc: 'Control who can read, write, or execute a file.',
    category: 'permissions',
    difficulty: 2,
    linux: {
      command: 'chmod',
      usage: 'chmod [permissions] [file]',
      realworldsample: 'chmod 755 script.sh',
      aliases: [],
      tip: '755 = owner can do everything, others can read and run. 644 = owner can write, others read-only.'
    },
    mac: {
      command: 'chmod',
      usage: 'chmod [permissions] [file]',
      realworldsample: 'chmod +x script.sh',
      aliases: [],
      tip: '+x adds execute permission. Use ls -l to see current permissions.'
    },
    windows: {
      command: 'icacls',
      usage: 'icacls [file] /grant [user]:[permission]',
      realworldsample: 'icacls notes.txt /grant User:F',
      aliases: [],
      tip: 'F = Full, M = Modify, R = Read. Use /deny to block access.'
    },
    powershell: {
      command: 'Set-Acl',
      usage: 'Set-Acl [file] [acl-object]',
      realworldsample: 'icacls notes.txt /grant User:F',
      aliases: [],
      tip: 'Set-Acl is complex for beginners. Use icacls in CMD for simpler permission changes.'
    }
  },

  {
    id: 'change-owner',
    title: 'Change file owner',
    desc: 'Transfer ownership of a file to another user.',
    category: 'permissions',
    difficulty: 3,
    linux: {
      command: 'chown',
      usage: 'chown [user]:[group] [file]',
      realworldsample: 'chown alice:staff report.txt',
      aliases: [],
      tip: 'Use -R to change ownership of a whole directory: chown -R alice:staff mydir/'
    },
    mac: {
      command: 'chown',
      usage: 'chown [user]:[group] [file]',
      realworldsample: 'chown alice:staff report.txt',
      aliases: [],
      tip: 'You need sudo to change files you do not own.'
    },
    windows: {
      command: 'icacls',
      usage: 'icacls [file] /setowner [user]',
      realworldsample: 'icacls notes.txt /setowner Administrator',
      aliases: [],
      tip: 'Requires admin privileges. Run CMD as Administrator first.'
    },
    powershell: {
      command: 'Set-Acl',
      usage: '(Get-Acl [file]).SetOwner([user])',
      realworldsample: '$acl = Get-Acl file.txt\n$acl.SetOwner([System.Security.Principal.NTAccount]"User")\nSet-Acl file.txt $acl',
      aliases: [],
      tip: 'This is verbose in PowerShell. takeown /f file.txt in CMD is simpler.'
    }
  },

  {
    id: 'run-as-admin',
    title: 'Run a command as admin/root',
    desc: 'Execute a command with elevated privileges.',
    category: 'permissions',
    difficulty: 2,
    linux: {
      command: 'sudo',
      usage: 'sudo [command]',
      realworldsample: 'sudo apt update',
      aliases: [],
      tip: 'You will be prompted for your password. sudo -i opens a full root shell.'
    },
    mac: {
      command: 'sudo',
      usage: 'sudo [command]',
      realworldsample: 'sudo nano /etc/hosts',
      aliases: [],
      tip: 'Same as Linux. Your account must be in the sudoers list.'
    },
    windows: {
      command: 'runas',
      usage: 'runas /user:Administrator [command]',
      realworldsample: 'runas /user:Administrator cmd',
      aliases: [],
      tip: 'Easier: right-click CMD or PowerShell and choose "Run as administrator".'
    },
    powershell: {
      command: 'Start-Process',
      usage: 'Start-Process powershell -Verb RunAs',
      realworldsample: 'Start-Process powershell -Verb RunAs',
      aliases: [],
      tip: 'This opens a new elevated PowerShell window. Right-click the taskbar icon is faster.'
    }
  },

  // ─── SYSTEM INFO ──────────────────────────────────────────────
  {
    id: 'disk-usage',
    title: 'Check disk usage',
    desc: 'See how much disk space is used and available.',
    category: 'system-info',
    difficulty: 1,
    linux: {
      command: 'df',
      usage: 'df -h',
      realworldsample: 'df -h',
      aliases: [],
      tip: '-h makes sizes human-readable (GB, MB). df shows all mounted drives.'
    },
    mac: {
      command: 'df',
      usage: 'df -h',
      realworldsample: 'df -h',
      aliases: [],
      tip: 'diskutil list also shows drives and partitions in a cleaner format.'
    },
    windows: {
      command: 'wmic',
      usage: 'wmic logicaldisk get size,freespace,caption',
      realworldsample: 'wmic logicaldisk get size,freespace,caption',
      aliases: [],
      tip: 'You can also just open File Explorer to check disk space visually.'
    },
    powershell: {
      command: 'Get-PSDrive',
      usage: 'Get-PSDrive -PSProvider FileSystem',
      realworldsample: 'Get-PSDrive -PSProvider FileSystem',
      aliases: [],
      tip: 'Shows Used and Free in bytes. Divide by 1GB for readable numbers.'
    }
  },

  {
    id: 'running-processes',
    title: 'View running processes',
    desc: 'See what programs and services are currently running.',
    category: 'system-info',
    difficulty: 2,
    linux: {
      command: 'ps',
      usage: 'ps aux',
      realworldsample: 'ps aux | grep nginx',
      aliases: [],
      tip: 'Pipe with grep to find a specific process: ps aux | grep firefox'
    },
    mac: {
      command: 'ps',
      usage: 'ps aux',
      realworldsample: 'ps aux | grep node',
      aliases: [],
      tip: 'top or htop give a live updating view of all processes.'
    },
    windows: {
      command: 'tasklist',
      usage: 'tasklist',
      realworldsample: 'tasklist | findstr chrome',
      aliases: [],
      tip: 'Pipe with findstr to search: tasklist | findstr "node"'
    },
    powershell: {
      command: 'Get-Process',
      usage: 'Get-Process [name]',
      realworldsample: 'Get-Process chrome',
      aliases: ['ps', 'gps'],
      tip: 'Omit the name to list everything. Sort by CPU: Get-Process | Sort-Object CPU -Descending'
    }
  },

  {
    id: 'kill-process',
    title: 'Stop a running process',
    desc: 'Force-quit a program that is not responding.',
    category: 'system-info',
    difficulty: 2,
    linux: {
      command: 'kill',
      usage: 'kill [PID]',
      realworldsample: 'kill 1234',
      aliases: [],
      tip: 'Get the PID from ps aux. Use kill -9 PID to force-kill a stubborn process.'
    },
    mac: {
      command: 'kill',
      usage: 'kill [PID]',
      realworldsample: 'kill -9 1234',
      aliases: [],
      tip: 'killall firefox kills by name instead of PID.'
    },
    windows: {
      command: 'taskkill',
      usage: 'taskkill /PID [pid] /F',
      realworldsample: 'taskkill /PID 1234 /F',
      aliases: [],
      tip: '/F forces termination. /IM kills by name: taskkill /IM chrome.exe /F'
    },
    powershell: {
      command: 'Stop-Process',
      usage: 'Stop-Process -Id [pid]',
      realworldsample: 'Stop-Process -Id 1234',
      aliases: ['kill'],
      tip: 'Stop-Process -Name chrome stops by name. -Force skips confirmation.'
    }
  },

  // ─── NETWORKING ───────────────────────────────────────────────
  {
    id: 'ping',
    title: 'Ping a host',
    desc: 'Test whether a remote server or IP address is reachable.',
    category: 'networking',
    difficulty: 1,
    linux: {
      command: 'ping',
      usage: 'ping [host]',
      realworldsample: 'ping google.com',
      aliases: [],
      tip: 'Linux pings forever by default. Use -c 4 to send only 4 packets.'
    },
    mac: {
      command: 'ping',
      usage: 'ping -c [count] [host]',
      realworldsample: 'ping -c 4 google.com',
      aliases: [],
      tip: 'Mac also pings forever. -c limits the count like Linux.'
    },
    windows: {
      command: 'ping',
      usage: 'ping [host]',
      realworldsample: 'ping google.com',
      aliases: [],
      tip: 'Windows sends 4 packets by default. Use -t to ping continuously.'
    },
    powershell: {
      command: 'Test-Connection',
      usage: 'Test-Connection [host]',
      realworldsample: 'Test-Connection google.com -Count 4',
      aliases: ['ping'],
      tip: 'ping works as an alias. Test-Connection returns structured objects you can inspect.'
    }
  },

  {
    id: 'show-ip',
    title: 'Show IP address',
    desc: 'Display the network IP address of your machine.',
    category: 'networking',
    difficulty: 1,
    linux: {
      command: 'ip',
      usage: 'ip addr show',
      realworldsample: 'ip addr show',
      aliases: [],
      tip: 'Look for the inet line under your interface (eth0, wlan0, etc). ifconfig works on older systems.'
    },
    mac: {
      command: 'ifconfig',
      usage: 'ifconfig',
      realworldsample: 'ifconfig en0',
      aliases: [],
      tip: 'en0 is usually Wi-Fi on Macs. Look for the inet line.'
    },
    windows: {
      command: 'ipconfig',
      usage: 'ipconfig',
      realworldsample: 'ipconfig /all',
      aliases: [],
      tip: '/all shows full details including MAC address and DNS servers.'
    },
    powershell: {
      command: 'Get-NetIPAddress',
      usage: 'Get-NetIPAddress',
      realworldsample: 'Get-NetIPAddress -AddressFamily IPv4',
      aliases: [],
      tip: '-AddressFamily IPv4 filters to just IPv4 addresses for cleaner output.'
    }
  },

]