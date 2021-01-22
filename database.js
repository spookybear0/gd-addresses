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
                function: "PlayLayer",
                address: "%GM + 0x164"
            },
            {
                function: "EditorLayer",
                address: "%GM + 0x168"
            },
            {
                function: "userName",
                address: "%GM + 0x198"
            }
        ]
    }
];