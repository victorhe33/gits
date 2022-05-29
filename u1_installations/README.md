
# Unit 1 Installations

![](https://weeblytutorials.com/wp-content/uploads/2018/10/install-Weebly-Apps.jpeg)

## Overview

We'll be installing all of the tools necessary for Unit 1 in this lesson.

***It is so important that you follow all of these instructions to a T, without skipping ahead.  It is also very important, when working in the terminal, to ensure that you type everything exactly correctly before running the command. You are interacting with your computer's inner configurations, and each command should be treated with care and intention.***

This process may be difficult for some, with different versions of the technology we are downloading, and the hardware we are using. If you run into any errors please let your instructors know so we can take care of them. 

There is a good chance that if one person is seeing an error through this, others will be seeing the same errors, so please let us know what you are seeing on your screen.  

For many of you, this will be the first time doing installations and set up this way. It is different than what you may be used to, we know, we've all done this ourselves as well. If you are feeling overwhelmed by any of this do not get discouraged! Dealing with installs and updates is a crucial part of this field. 

We will get everyone set up, even if it involves working 1 on 1 in a breakout room, or researching a new error message we have not seen before! 


## Slack

We'll be using Slack to register attendance and communicate during class. Follow the instructions below to sign up for Slack.

- Visit the following [site](https://slack.com/downloads) to download the desktop application.
- You should definitely ***not*** be using the browser version of Slack.
- Upload a ***clear*** and ***professional*** profile picture to Slack.
- Your Slack name should be your ***full name*** and not a username or nickname. This helps your instructors and classmates get to know you and interact with you.

---

## Browsers

In order to become efficient JavaScript developers, we'll utilize any one of 4 recommended browsers:

- [Chrome](https://www.google.com/chrome/)
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Brave](https://brave.com/)
- [Edge](https://www.microsoft.com/en-us/edge?r=1)

**Safari is not included on this list due to specific features that are not cross compatible with other browsers.**

## MacOS Users...

### Installing Homebrew

Homebrew is a package manager for MacOS. It makes installing other programs fast and easy.

To install Homebrew, paste the following command into your terminal and hit the <kbd>return</kbd> key:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This command will perform the installation for you.

---

### Installing Zsh and Oh-My-Zsh

#### Zsh Installation

What is Zsh? Zsh is a shell designed for interactive use. It provides us with useful shortcuts to execute terminal commands faster and also enables auto completion for those commands.

To install Zsh, execute the following command in your terminal:

```sh
brew install zsh
```

#### Oh-My-Zsh Installation

What is Oh-My-Zsh?

> Oh My Zsh is an open source, community-driven framework for managing your Zsh configuration. It comes with a bunch of features out of the box and improves your terminal experience.

It also provides us with preset themes to make reading our terminal _much_ easier.

To install Oh-My-Zsh, execute the following commands in your terminal:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```sh
chsh -s $(which zsh)
```

### Installing NodeJS

What is NodeJS? NodeJS is a JavaScript runtime that allows us to execute JavaScript outside of a browser.

To intall NodeJS, execute the following command in your terminal:

```sh
brew install node
```

To confirm your installation, execute the following in your terminal:

```sh
node -v
```

You should see a node version listed.

### Installing Git

Git is a version control manager that we'll be using in conjunction with GitHub to manage code updates during this course.

To install Git, execute the following command in your terminal:

```sh
brew install git
```

Once the installation completes, execute the following commands in your terminal, **_one by one_**, with your ***own*** information inserted:

```sh
git config --global user.name "Your Actual Name Here"
```

```sh
git config --global user.email "your_email@example.com"
```

The name and email should be ***your*** name and email that you use on GitHub.

#### Setting Up GitHub Authentication

In order for GitHub to deem our machines as "safe" to push code, we need to setup an identification key known as an `ssh key`.

Enter the following commands in your terminal, with your ***own*** information inserted:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

The above email ***must*** be your GitHub email!

You should see the following prompt:

```sh
> Enter a file in which to save the key (/Users/you/.ssh/id_ed25519):
```

Leave it blank and hit <kbd>return</kbd> to save it in a default file.

You'll now be prompted to password protect the ssh key, but we can skip this portion. When prompted with the following, **hit** <kbd>return</kbd> **to leave the password as blank, both times**:

```sh
> Enter passphrase (empty for no passphrase):
> Enter same passphrase again:
```

Now, let's start the MacOS ssh-agent. Enter the following command into your terminal:

```sh
eval "$(ssh-agent -s)"
```

Now copy the ssh key to your clipboard with this command:

```sh
pbcopy < ~/.ssh/id_rsa.pub
```

To complete this setup, follow the instructions starting from Step 2 at this link **[HERE](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)**.

To check your installation, run:

```bash
ssh git@github.com
```

You should see output similar to:

```
Hi <you>! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```

### Installing VSCode

VSCode is going to be our text editor of choice throughout the course. It provides us with a wonderful environment to run and test our code.

To install VSCode, execute the following command in your terminal:

```sh
brew install --cask visual-studio-code
```

Verify your installation by running:

```sh
code .
```

This command should open a new VSCode window.

#### If the `code .` command does not work for you...

Open VSCode manually from your Applications folder.

Once a VSCode window opens, press and hold <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>P</kbd> to open the _command palette_. In the command palette, type in `path` and choose the option:

> Shell Command: Install `code` command in PATH.

This should enable the ability to open VSCode from terminal with the `code .` command. Try it out.


## Windows (WSL)

#### Installing WSL

Open `powershell` as an **admin**. Once powershell opens, run the following command within that shell:

```ps
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

**NOTE**: In order to install WSL2, your machine must meet the following requirements:

> - For x64 systems: Version 1903 or higher, with Build 18362 or higher.
> - For ARM64 systems: Version 2004 or higher, with Build 19041 or higher.
> - Builds lower than 18362 do not support WSL2. Use the Windows Update Assistant to update your version of Windows.

Now we'll enable the virtual machine feature in your machine. WSL runs in a _virtual environment_. It's like running a computer inside of another computer!

Enter the following in `powershell` with **admin** privileges:

```ps
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

**At this point, you must restart your machine!**

### Installing The Linux Kernal Update Package

Install the following package from this **[LINK](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)**

It's safe I promise!

Open `powershell` again with **admin** privileges and enter the following command:

```ps
wsl --set-default-version 2
```

Let's install our Linux distribution. We recommend Ubuntu 18.04 which you can download **[HERE](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)**. It will take you directly to the Microsoft store.

Once you reach the Microsoft store, click the `Get` button to download and install Ubuntu 18.04.

Once the download completes, you should be prompted with a terminal window:

![Bash](https://docs.microsoft.com/en-us/windows/wsl/media/ubuntuinstall.png)

Enter a username and password. We recommend setting these the same as your Windows OS login!

Now let's ensure that the Ubuntu environment is on WSL2. Enter the following into `powershell` as an **admin**:

```ps
wsl --list --verbose
```

From the list given, find the Ubuntu instance and add the information to the next command:

```ps
wsl --set-version <distribution name> <versionNumber>
```

Once these steps are completed, you should be able to open your Ubuntu environment by selecting it from your start menu. We recommend pinning it to your taskbar. Keep the Ubuntu terminal open for the remainder of this walkthrough.

#### Updating Packages

Before proceeding, run the following command in your terminal or Ubuntu:

```sh
sudo apt update
```

#### Installing Git

Git is a version control manager that we'll be utilizing throughout this program. Install it by entering the following command into your terminal:

```sh
sudo apt-get install git
```

Let's configure Git.

Enter the following commands into your terminal:

```sh
git config --global user.name "Your Name"
```

Replace `Your Name` with your name from GitHub.

```sh
git config --global user.email "youremail@domain.com"
```

Replace `youremail@domain.com` with the email you have registered with GitHub.

### Setting Up Our GitHub SSH Keys

SSH keys are used to identify machines/users via an encoded key.

To create a SSH key, enter the following command in your terminal:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**NOTE**: Be sure to replace `your_email@example.com` with the email that you have registered with GitHub.

When you're prompted to `Enter a file in which to save the key,` press <kbd>Enter</kbd>. This accepts the default file location.

When prompted for a password, hit <kbd>Enter</kbd> twice to skip this step:

```sh
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

We'll now start the SSH agent, enter the following command into your terminal:

```sh
eval "$(ssh-agent -s)"
```

Now enter the following command into your terminal:

```sh
ssh-add ~/.ssh/id_rsa.pub
```

Now let's install `xclip`. `xclip` is used so that we can copy items into our clipboard. Enter the following command into your terminal:

```sh
sudo apt-get install xclip
```

Now we can copy our SSH key:

```sh
xclip -selection clipboard < ~/.ssh/id_rsa.pub
```

Follow the steps outlined **[HERE](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)** starting from Step 2. We've already completed Step 1.

### Installing Zsh and Oh-My-Zsh

#### Installing Zsh

Zsh is an extension of the regular bash shell that many computers use as default. It provides us with features that the regular bash shell does not have.

Install Zsh by running the following command in your terminal:

```sh
sudo apt install zsh -y
```

#### Installing Oh-My-Zsh

Oh-My-Zsh is an extension of the Zsh prompt. It provides us with useful information in a clear and legible format.

Install Oh-My-Zsh by running the following command in your terminal:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

A prompt will appear to ask if you want to switch your shell to Zsh, select `yes`.

Close your terminal and re-open it. Oh-My-Zsh should now load by default.

### Installing VSCode

VSCode is going to be our text editor of choice for this course.

You can download it **[HERE](https://code.visualstudio.com/download)**.

Once downloaded, go ahead and run the installer. Once the installer completes, open VSCode.

#### Installing the WSL Remote Extension

Once you open VSCode, you may be prompted to install the Remote WSL Extension. Go ahead and do so. If you are not prompted, you can download it **[HERE](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)**.

Type in `code .` in your terminal.
This should open a VSCode window.

If the above does not work, open VSCode. It will be located in your Applications folder. Once a VSCode window opens, press and hold <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>P</kbd> to open the command palette. In the command palette, type in `path` and choose the option:

Shell Command: Install code command in PATH.

Select this option and reconfirm the `code .` command in your terminal.

### Installing NodeJS

NodeJS is a runtime environment that allows us to run JavaScript outside of a browser.

First we'll update the apt sources for the latest node version:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Next open your `.zshrc` file with: `code ~/.zshrc` and add the following line in the first available space:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

To install NodeJS, run the following command in your terminal:

```sh
nvm install --lts
```

**Restart your terminal.**

Confirm the installation with the following command:

```sh
node --version
```

#### NPM Installation

`npm` comes with nodejs, however we need to confirm that it was installed correctly.

Confirm the installation with the following command:

```sh
npm --version
```

Change the persmissions for the npm folder:

```sh
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```
