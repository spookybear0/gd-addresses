This is a base class, meaning there are multiple layers using this class.

You can find out which layer you are on with the currentMenu function and comparing it to the below chart:

```
My Levels            0x62
Saved Levels         0x63
Featured             0x6
Hall of Fame         0x10
Map Packs            0x9
Search               0x0
Most downloaded      0x1
Most liked           0x2
Trending             0x3
Recent               0x4
Magic                0x7
Awarded              0xB
Followed             0xC
Friends              0xD
Find Users           0xE
Users Levels         0x5
```

Here are the known addresses:

```
SelectLayer::init = base + 0x15A040

SelectLayer::currentMenu = SelectLayer + 0xEC
```