import heroImg from '../assets/hero.png';

export const commands = [
{
    command: 'ls',
    desc: 'List directory contents',
    usage: 'ls [options] [file...]',
    picture: heroImg,
    // sample will display an image

},
{
    command: 'cd',
    desc: 'Change the current directory',
    usage: 'cd [directory]',
},
{
    command: 'mkdir',
    desc: 'Create a new directory',
    usage: 'mkdir [options] directory_name',
},
{
    command: 'rm',
    desc: 'Remove files or directories',
    usage: 'rm [options] file...',
},
{
    command: 'ping',
    desc: 'Checks whether another computer or website can be reached over the network.',
    usage: 'ping [options] host',
}
];