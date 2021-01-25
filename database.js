// this is the list of all the addresses
// (i have no clue how to access a json file on github pages,
// so for now, i'm using this instead.)

// use EditLevelLayer as a reference for how to add a new address.
// rest is handled automatically

const addresses = [
    {
        namespace: "EditLevelLayer",
        contents: [
            {
                function: "init",
                address: "%GD + 0x6F5D0",
                tags: [ "Local", "Level", "View", "Share", "Publish" ],
                args: [
                    { arg: "-returnValue", type: "signed int", desc: "Unknown" },
                    { arg: "self", type: "CCLayer*", desc: "The initialized layer itself" },
                    { arg: "unknown", type: "void*", desc: "Unknown, required by calling convention" },
                    { arg: "GameLevel", type: "GameLevel*", desc: "The level used to initialize the layer" },
                ],
                callingConvention: "__fastcall",
                description: "The initialization function for EditLevelLayer"
            }
        ]
    },
    {
        namespace: "FLAlertLayer",
        contents: [
            {
                function: "create",
                address: "%GD + 0x227E0",
                tags: [],
                callingConvention: "",
                description: "Popup create"
            }
        ]
    },
    {
        namespace: "MenuLayer",
        contents: [
            {
                function: "init",
                address: "%GD + 0x1907b0",
                tags: [ "main menu" ],
                args: [
                    { arg: "-returnValue", type: "bool", desc: "Unknown" },
                    { arg: "self", type: "CCLayer*", desc: "The layer itself" },
                ],
                callingConvention: "__fastcall",
                description: `
                The initialization function for MenuLayer.
                <br><br>   
                Layer child indexes:<br>
                 <t-dark>•</t-dark> <t-main>3</t-main> <t-fourth>CCMenu*</t-fourth> <t-norm>Bottom Menu</t-norm>
                `
            }
        ]
    },
    {
        namespace: "GameManager",
        contents: [
            {
                function: "init",
                address: "%GD + 0x3222D0"
            },
            {
                function: "getSharedState",
                address: "%GD + 0xC4A50"
            },
            {
                function: "getGameVariable",
                address: "%GD + 0xC9D30"
            },
            {
                function: ".PlayLayer",
                address: "%GM + 0x164"
            },
            {
                function: ".EditorLayer",
                address: "%GM + 0x168"
            },
            {
                function: ".userName",
                address: "%GM + 0x198"
            }
        ]
    },
    {
        namespace: "PlayLayer",
        contents: [
            {
                function: "create",
                address: "%GD + 0x1FB6D0"
            },
            {
                function: "init",
                address: "%GD + 0x01FB780"
            },
            {
                function: "update",
                address: "%GD + 0x2029C0"
            },
            {
                function: "updateReplay",
                address: "%GD + 0x20AF40"
            },
            {
                function: "releaseButton",
                address: "%GD + 0x1F4F70"
            },
            {
                function: "pushButton",
                address: "%GD + 0x111500"
            },
            {
                function: ".Player2",
                address: "PlayLayer + 0x228"
            },
            {
                function: ".Player1",
                address: "PlayLayer + 0x224"
            },
            {
                function: ".time",
                address: "PlayLayer + 0x450"
            },
            {
                function: "onQuit",
                address: "%GD + 0x20D810"
            },
            {
                function: "levelComplete",
                address: "%GD + 0x1FD3D0"
            },
            {
                function: ".isDead",
                address: "PlayLayer + 0x39C"
            },
            {
                function: ".levelLength",
                address: "PlayLayer + 0x3B4"
            },
            {
                function: ".isPractice",
                address: "PlayLayer + 0x495"
            },
            {
                function: ".currentAttempt",
                address: "PlayLayer + 0x4A8"
            },
            {
                function: "timeForXPos2",
                address: "%GD + 0x1FD3D0"
            },
            {
                function: "togglePracticeMode",
                address: "%GD + 0x20D0D1"
            },
            {
                function: "destroyPlayer",
                address: "%GD + 0x20A1A0"
            },
            {
                function: "markCheckpoint",
                address: "%GD + 0x25FB60",
                args: [
                    { arg: "-returnValue", type: "unknown", desc: "Unknown" },
                    { arg: "self", type: "CCLayer*", desc: "PlayLayer" },
                    { arg: "unknown", type: "void*", desc: "Unknown" },
                    { arg: "unknown", type: "void*", desc: "Unknown" }
                ],
                callingConvention: "__fastcall"
            },
            {
                function: "createCheckpoint",
                address: "%GD + 0x20B050",
                args: [
                    { arg: "-returnValue", type: "int", desc: "unknown" },
                    { arg: "self", type: "CCLayer*", desc: "PlayLayer" }
                ]
            },
            {
                function: "removeLastCheckpoint",
                address: "%GD + 0x20B830"
            },
            {
                function: "getCapacityString",
                address: "%GD + 0x10C9B0"
            },
            {
                function: "updateAttempts",
                address: "%GD + 0x20CED0"
            },
            {
                function: "resetLevel",
                address: "%GD + 0x20BF00"
            },
        ]
    }
];
