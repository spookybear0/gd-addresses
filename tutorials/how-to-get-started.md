# How to get started

This guide will teach you how to get started making mods for Geometry Dash (some of this information can be used to mod other games too)

## Prerequisites

### General GD/Cocos2d-x/Computer knowledge

Geometry Dash runs on a game engine called cocos2d-x (2.2.3) which is a cross platform game engine. Learning how to use cocos2d-x 2.2.3 will be benefical for creating good mods. You can find the documentation for cocos2d-x 2.2.3 [here](https://docs.cocos2d-x.org/api-ref/cplusplus/V2.2.3/). You also will need to know basic things on how a computer or game works.

### Knowledge of C++

To do any type of modding, you need a low level programming langauge to edit the memory like C++ or Rust. C++ is prefered to be used by many modders because GD is made in C++, but you can absolutly use Rust as well. This guide will not explain how to use Rust for GD modding.

### Visual Studio 2019

The prefered IDE for making Geometry Dash mods is Visual Studio 2019 as the mods will be more compatible with gd.

#### Installation

You can download Visual Studio 2019 [here](https://visualstudio.microsoft.com/downloads/).

## Setup

### Creating a new Visual Studio project

Open up Visual Studio 2019, this is the program we will be using to write our code. From here you want to select "Create a new project". When it asks you to select your template, select "Dynamic-Link Library (DLL)". You can name your project whatever you want. Once you are done, it should open a code editor, this is `dllmain.cpp`, the base of your dll.

// TODO: add screenshots

## Your first mod



## Helpful resources

[gd_decompilied](https://github.com/ItalianApkDownloader/gd_decompiled/) is very helpful for knowing the class structure of the game. Do keep in mind that this is the android version so it might not be the same on windows.

[gd-addresses](https://github.com/spookybear0/gd-addresses) is very helpful in finding the spots in memory where functions are stored (like 0x01FB780). If you find any addresses on your own, contributing them to this repo or DMing spook at spook#9315.

[cappuchino-sdk](https://github.com/AndreNIH/CappuccinoSDK) is a tool for allowing you to call cocos2d-x functions and use cocos2d-x classes easily. Installation instructions will be located in another tutorial.

[MinHook](https://github.com/TsudaKageyu/minhook) is a header for being able to "hook" functions, by calling a callback whenever it is called.

[gd.h](https://github.com/poweredbypie/gd.h) Geometry Dash headers for easy calling of GD functions.
