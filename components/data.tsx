const CreaturesData = [
    {   id:0,
        name: "Aarakocra",
        cr:0.25,
        type: "humanoid",
        size: "medium",
        ac: 12,
        hp: 13,
        initiative: 2,
        alignment: "neutral",
        speed:{
            fly: true,
            swim: false,
            walk: true,
            climb: false,
        },
        legendary: false,
        environment: {
            desert: false,
            mountain: true,
            grassland: false,
            forest: false,
            hill: true,
            swamp: false,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: true
        }
    },
    {   id:2,
        name: "Aboleth",
        cr:10,
        type: "aberration",
        size: "large",
        ac: 17,
        hp: 135,
        initiative: -1,
        alignment: "lawful evil",
        speed:{
            fly: false,
            swim: true,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: false,
            mountain: false,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: false,
            underdark: true,
            underwater: true,
            coastal: false
        }
    },
    {   id:3,
        name: "Abominable Yeti",
        cr:9,
        type: "monstrosity",
        size: "huge",
        ac: 15,
        hp: 137,
        initiative: 0,
        alignment: "chaotic evil",
        speed:{
            fly: false,
            swim: false,
            walk: true,
            climb: true,
        },
        legendary: false,
        environment: {
            desert: false,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: true,
            underdark: false,
            underwater: false,
            coastal: false
        }
    },
    {   id:4,
        name: "Acolyte",
        cr:0.25,
        type: "humanoid",
        size: "medium",
        ac: 10,
        hp: 9,
        initiative: 0,
        alignment: "any alignment",
        speed:{
            fly: false,
            swim: false,
            walk: true,
        },
        legendary: false,
        environment: {
            desert: true,
            mountain: true,
            grassland: true,
            forest: true,
            hill: true,
            swamp: true,
            urban: true,
            artic: true,
            underdark: true,
            underwater: true,
            coastal: true
        }
    },
    {   id:5,
        name: "Adult Black Dragon",
        cr:14,
        type: "dragon",
        size: "huge",
        ac: 19,
        hp: 195,
        initiative: 2,
        alignment: "chaotic evil",
        speed:{
            fly: true,
            swim: true,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: false,
            mountain: false,
            grassland: false,
            forest: false,
            hill: false,
            swamp: true,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: true
        }
    },
    {   id:6,
        name: "Adult Blue Dracolich",
        cr:17,
        type: "undead",
        size: "huge",
        ac: 19,
        hp: 225,
        initiative: 0,
        alignment: "lawful evil",
        speed:{
            fly: true,
            swim: false,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: true,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: false
        }
    },
    {   id:7,
        name: "Adult Blue Dragon",
        cr:16,
        type: "dragon",
        size: "huge",
        ac: 19,
        hp: 225,
        initiative: 0,
        alignment: "lawful evil",
        speed:{
            fly: true,
            swim: false,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: true,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: false
        }
    },
    {   id:8,
        name: "Adult Brass Dragon",
        cr:13,
        type: "dragon",
        size: "huge",
        ac: 18,
        hp: 172,
        initiative: 0,
        alignment: "chaotic good",
        speed:{
            fly: true,
            swim: false,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: true,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: false
        }
    },
    {   id:9,
        name: "Adult Bronze Dragon",
        cr:15,
        type: "dragon",
        size: "huge",
        ac: 19,
        hp: 212,
        initiative: 0,
        alignment: "lawful good",
        speed:{
            fly: true,
            swim: true,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: false,
            mountain: false,
            grassland: false,
            forest: false,
            hill: false,
            swamp: true,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: true
        }
    },
    {   id:10,
        name: "Adult Copper Dragon",
        cr:14,
        type: "dragon",
        size: "huge",
        ac: 18,
        hp: 184,
        initiative: 0,
        alignment: "chaotic good",
        speed:{
            fly: true,
            swim: false,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: false,
            mountain: true,
            grassland: false,
            forest: false,
            hill: true,
            swamp: false,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: false
        }
    },
    {   id:11,
        name: "Adult Gold Dragon",
        cr:17,
        type: "dragon",
        size: "huge",
        ac: 19,
        hp: 256,
        initiative: 0,
        alignment: "lawful good",
        speed:{
            fly: true,
            swim: true,
            walk: true,
            climb: false,
        },
        legendary: true,
        environment: {
            desert: false,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: false,
            underdark: false,
            underwater: false,
            coastal: true
        }
    },
    {   id:12,
            name: "Adult Green Dragon",
            cr:15,
            type: "dragon",
            size: "huge",
            ac: 19,
            hp: 207,
            initiative: 1,
            alignment: "lawful evil",
            speed:{
                fly: true,
                swim: true,
                walk: true,
                climb: false,
            },
            legendary: true,
            environment: {
                desert: false,
                mountain: false,
                grassland: false,
                forest: true,
                hill: false,
                swamp: false,
                urban: false,
                artic: false,
                underdark: false,
                underwater: false,
                coastal: true
            }
    },
    {   id:13,
            name: "Adult Red Dragon",
            cr:17,
            type: "dragon",
            size: "huge",
            ac: 19,
            hp: 256,
            initiative: 0,
            alignment: "chaotic good",
            speed:{
                fly: true,
                swim: false,
                walk: true,
                climb: false,
            },
            legendary: true,
            environment: {
                desert: false,
                mountain: true,
                grassland: false,
                forest: false,
                hill: false,
                swamp: false,
                urban: false,
                artic: false,
                underdark: true,
                underwater: false,
                coastal: false
            }
    },
    {   id:14,
            name: "Adult Silver Dragon",
            cr:16,
            type: "dragon",
            size: "huge",
            ac: 19,
            hp: 243,
            initiative: 0,
            alignment: "lawful good",
            speed:{
                fly: true,
                swim: false,
                walk: true,
                climb: false,
            },
            legendary: true,
            environment: {
                desert: false,
                mountain: true,
                grassland: false,
                forest: false,
                hill: false,
                swamp: false,
                urban: false,
                artic: true,
                underdark: false,
                underwater: false,
                coastal: true
            }
    },
    {   id:15,
            name: "Adult White Dragon",
            cr:13,
            type: "dragon",
            size: "huge",
            ac: 18,
            hp: 200,
            initiative: 0,
            alignment: "chaotic evil",
            speed:{
                fly: true,
                swim: true,
                walk: true,
                climb: false,
            },
            legendary: true,
            environment: {
                desert: false,
                mountain: true,
                grassland: false,
                forest: false,
                hill: false,
                swamp: false,
                urban: false,
                artic: true,
                underdark: false,
                underwater: false,
                coastal: false
            }
    },
    {   id:16,
        name: "Air Elemental",
        cr:5,
        type: "elemental",
        size: "large",
        ac: 15,
        hp: 90,
        initiative: 5,
        alignment: "neutral",
        speed:{
            fly: true,
            swim: false,
            walk: false,
            climb: false,
        },
        legendary: false,
        environment: {
            desert: true,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: true,
            underdark: false,
            underwater: false,
            coastal: true
        }
    },
    {   id:17,
        name: "Air Elemental Large",
        cr:5,
        type: "elemental",
        size: "large",
        ac: 15,
        hp: 90,
        initiative: 5,
        alignment: "neutral",
        speed:{
            fly: true,
            swim: false,
            walk: false,
            climb: false,
        },
        legendary: false,
        environment: {
            desert: true,
            mountain: true,
            grassland: false,
            forest: false,
            hill: false,
            swamp: false,
            urban: false,
            artic: true,
            underdark: false,
            underwater: false,
            coastal: true
        }
    },

   
]

export { CreaturesData }