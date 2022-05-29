# Terminal

![Image Header](https://res.cloudinary.com/ahonore42/image/upload/v1611081040/logos/cc51dfbbbc2ce9a76773196bea0126a8_a5fcbq.jpg)

## Overview
In this lesson we will be covering how to use the MacOS Terminal. As a developer, you will likely be using your terminal every day to manage your workflow or execute commands to install and maintain necessary packages for applications you will be building. At the end of this lesson, we will use our terminal knowledge to build a file structure that will be used throughout the cohort.


Please note that this class, and this field as a whole, are moving in a Mac-centric direction. It will be possible to go through these lessons with a PC, but there may be some additional steps needed at each point.

If you are having any problems, or if you are seeing any strange error messages on your screen, please let your instructors know. Remember, if one person is seeing an error message, there is a good chance that others in the class will be as well, so please pay attention when your classmates show off their error messages. 

## Objectives
*After this lesson, students will be able to:*
- Understand what the MacOS Terminal is
- Navigate MacOS using Terminal commands
- Manipulate files and folder on their machine using Terminal commands
- Use a structured file system for future repositories

## Getting Started

### What is the Terminal?

### Let's open it:
- Hit <kbd>⌘</kbd> + <kbd>Space</kbd> (Command + spacebar)
- Type "Terminal"
- Hit <kbd>return</kbd>

The terminal is a tool developers use to execute instructions to the computer. It's the developer's best friend! Through the terminal, one can navigate through files and folders with speed. We can write scripts to automate common tasks and run them in the terminal.

## Modifier keys?
- Modifier keys can be used with MacOS to execute commands directly from your keyboard. Below is a list of all keyboard shortcuts.
- MacOS Shortcut Keys: https://support.apple.com/en-us/HT201236

![Mac Keyboard Modifier Keys](https://cdn.osxdaily.com/wp-content/uploads/2018/01/apple-keyboard-modifier-keys.jpg)

## Paths

Every file or folder in a file system can be read, written, and deleted by referencing its position inside the file system. When we talk about the position of a file or a folder in a file system, we refer to its "path". There are a couple of different kinds of paths we can use to refer to a file – **absolute paths** and **relative paths**.

**Directory** is an important term that's used interchangeably with *folder*. Though they are not exactly the same thing, when we say "navigate to your project directory", think of this as "navigate to your project folder".  Here's a little more information:

_Strictly speaking, there is a difference between a directory which is a file system concept, and the graphical user interface metaphor that is used to represent it (a folder)...If one is referring to a container of documents, the term folder is more appropriate. The term directory refers to the way a structured list of document files and folders is stored on the computer. It is comparable to a telephone directory that contains lists of names, numbers and addresses and does not contain the actual documents themselves._

*Taken from [Close-To-Open Cache Consistency in the Linux NFS Client](http://www.citi.umich.edu/projects/nfs-perf/results/cel/dnlc.html)*

## What is an Absolute Path?

An absolute path is defined as the specific location of a file or folder *from the root directory*, typically shown as `/`. The root directory is the starting point from which all other folders are defined and is not normally the same as your **Home** directory, which is normally found at `/Users/[Your Username]`.

## Working with Unix Commands and File Paths

Typing `cd` - a command for "change directory" with no parameters takes us to our home directory.

```bash
cd
```

If we type in `pwd` - a command for "print working directory" from that folder, we can see where we are in relation to the root directory.

Some examples of absolute path:

```bash
/usr/local/bin/git
/etc/example.ext
/var/data/database.db

```

Notice, all these paths started from `/` directory which is a root directory for every Linux/Unix machines.

## What is a Relative Path?

A relative path is a reference to a file or folder **relative** to the current position, or the present working directory(pwd). If we are in the folder `/a/b/` and we want to open the file that has the absolute path `/a/b/c/file.txt`, we can just type:

```bash
open c/file.txt
```

or

```bash
open ./c/file.txt
```

At any time, we can also use the absolute path, by adding a slash to the beginning of the path. The absolute path is the same for a file or a folder regardless of the current working directory, but relative paths are different, depending on what directory we are in.  Directory structures are laid out like `directory/subdirectory/subsubdirectory`.

Below are some examples of using relative and absolute path for the same action:


1. My present location is `/Users/username/ga/lessons` and now I want to change directory to `/Users/username/ga`.

  * Using relative path: `cd ..`
  * Using absolute path: `cd /Users/username/ga`

2. My present location is `/Users/username/ga/lessons` and I want to change the location to `/Users/username/ga/labs`

  * Using relative path: `cd ../labs`
  * Using absolute path: `cd /Users/username/ga/labs`

## More Commands

| Command   | Explanation                                                                     |
|-----------|---------------------------------------------------------------------------------|
| `pwd`     | shows in which directory you're currently in                                    |
| `mkdir`   | creates a new directory                                                         |
| `ls`      | lists the contents of the current directory you're in                           |
| `cd`      | moves you to the specified directory*                                           |
| `cd ..`   | goes back one directory                                                         |
| `cd ~`    | takes you to your home directory                                                |
| `touch`   | creates an empty file                                                           |
| `cp`      | copies an existing specified file and pastes it with whatever name you give it  |
| `mv old/path new/path`      | moves an existing specified file to a specified destination   |
| `mv path/filename path/newname` | if paths are the same with a differeent file name, the file's name will be changed                   |
| `rm`      | deletes the specified file                                                      |
| `rm -rf`  | deletes all of the files within a directory along with the directory itself     |
| `man`     | open a help manual for a particular command                                     |
| `history` | shows the history of the commands you've typed in your terminal                 |
| `ctrl + r`| search through history of your commands (press enter to execute it)             |
| `ctrl + u`| delete command line                                                             |
| `df -h`   | displays free disk space                                                        |


You will NOT be expected to have all of these commands memorized by the end of the day. As we continue on in the class, and you begin to use these each day, you will feel more and more comfortable with these different commands. 

*Note: If you are using Zsh, you can leave out the `cd` entirely; the directly name itself will move you into it.

## Examples
- Copy command - `cp`
```
cp hello.txt bye.txt
```

- Move command - `mv`

moves an existing specified file to a specified destination

```
mv bye.txt ga/
```

- Manual - `man`
open a help manual for a particular command
```
man ls
```

## Group Practice
Let's put our terminal skills to the test and build a few important directories

- First, we'll `cd ~` to change directories to the root directory of our machines
- Next, let's create a new directory called `ga_seir` (or something similar)
```
mkdir ga_seir
```
- We'll be using this as the main directory to house all of our future repositories throughout the course
- Now we'll need a directory for each unit in our cohort, why don't we try creating them all in one command?
- `cd` into `ga_seir` first
```
mkdir unit1 unit2 unit3 unit4
```
- Let's take a look and see if all of our folders were created within the `ga_seir` directory with `ls`
- One more folder, since this might be a helpful place to have it
```
mkdir projects
```
- Perfect, why don't we add a few more directories within each unit folder to keep our work organized?
- From the root `ga_seir` folder, we can make these directories using relative path
```
mkdir unit1/lessons unit1/labs unit1/homework
```
- Let's check inside of our unit1 folder to see if the new directories were created in the right place
- `cd` into `unit1`, then use the `ls` command to see if the `lessons`, `labs`, and `homework` directories were created
- Now let's make some directories for `unit2`. We'll have to get there first, so we'll change folders with `cd ../unit2`
- Since we're now in the `unit2` directory, we can make the sub directories we need without any additional paths
```
mkdir lessons labs homework
```
- For `unit3` let's move back to the root `ga_seir` folder with a quick `cd ..` and run the same command
```
mkdir lessons labs homework
```
- Check with the `ls` command to see if they have been created
- Oh no! They're in the wrong folder! Not good, we'll have to fix that right away using the `mv` command
```
mv lessons labs homework unit3
```
- Check inside your `unit3` folder to see if they've been moved properly
- Finally, let's create the last 3 directories we need for `unit4` from the root `ga_seir` folder
```
mkdir unit4/lessons unit4/labs unit4/homework
```
- And with that, we've created an organized file structure that will allow us to keep our work organized throughout the cohort!

## A Few More Commands
- Let's create a text file with your name in the `projects` directory
```
cd projects
touch name.txt
```
- Now, we'll use a special command `echo` to add some text to our name file
- The `echo` command repeats whatever follows the command, but it can also be used to add characters to a file
```
echo "Hi, my name is <your_name>" >> name.txt
```
- What if we wanted to read that .txt file from our terminal? There's a command for that!
- Use the `cat` command to read the .txt file we've just added characters to
```
cat name.txt
```
- Pretty cool, right? No? Well, let's remove the file we just made if it's taking up too much space on your machine
- To do this we'll be using the `rm` command
- Be VERY careful when using this command, as it will *permanently erase* whatever file follows the command, trigger safety is advised
- First, let's `ls` to be sure our `name.txt` file is in our `projects` folder. Now, we'll remove it
```
rm name.txt
```
- And it's gone forever!
- A more common use of the `rm` command is for removing entire directories at a time. To delete all of the files in a directory along with the directory itself you can use the `rm` command along with the `-rf` (recursive force) flag followed by the name of the directory where you want to delete all files.
- Always be careful when using the `rm` command
```
rm -rf directory_name
```

## Recap
In this lesson we learned about using MacOS terminal commands, which can be very powerful. Commands you'll be using most frequently include:
- `cd` change directory
- `ls` list files in a directory
- `mkdir` make a directory
- `touch` create a file within a directory
- `mv` move a file or directory to a new location
- `rm` permanently remove a file within a directory
- `rm -rf` permanently deletes all of the files within a directory along with the directory itself

## Resources
[MacOS Terminal Commands](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/)

[OMZ Cheatsheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)

