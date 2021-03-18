This is the class for GameObject. A GameObject instance is any sort of object thats used in-game, whether that be a block, a trigger, or even the player object.

Here are the known addresses:

```cpp
GameObject::createWithKey = base + 0x1CF4F0

GameObject::setFlipX = base + 0xe4fd0

GameObject::setFlipY = base + 0xe5010

GameObject::setupCustomSprites = base + 0xd7d50

GameObject::addMainSpriteToParent = base + 0xeb250

GameObject::resetObject = base + 0xd1470

GameObject::activateObject = base + 0xd1870

GameObject::deactivateObject = base + 0xd19b0

GameObject::getObjectRect = base + 0xe4a70

GameObject::getObjectRect = base + 0xe4a40

GameObject::getObjectRect2 = base + 0xe4b90

GameObject::getObjectTextureRect = base + 0xe4c40

GameObject::getRealPosition = base + 0xe4d90

GameObject::setStartPos = base + 0xd1390

GameObject::updateStartValues = base + 0xd1610

GameObject::isFlipX = base + 0xe4fb0

GameObject::isFlipY = base + 0xe4fc0

GameObject::setRScaleX = base + 0xe5200

GameObject::setRScaleY = base + 0xe5240

GameObject::setRScale = base + 0xe5280

GameObject::getRScaleX = base + 0xe52c0

GameObject::getRScaleY = base + 0xe5300

GameObject::calculateSpawnXPos = base + 0xe5d20

GameObject::powerOnObject = base + 0xe5d40

GameObject::powerOffObject = base + 0xe5d60

GameObject::setObjectColor = base + 0xee620

GameObject::setGlowColor = base + 0xee8c0

GameObject::getOrientedBox = base + 0xef160

GameObject::addToGroup = base + 0xeb8d0

GameObject::removeFromGroup = base + 0xeb930

GameObject::getObjectRectDirty = base + 0x989a0

GameObject::setObjectRectDirty = base + 0x989b0

GameObject::getOrientedRectDirty = base + 0x989c0

GameObject::setOrientedRectDirty = base + 0x989d0

GameObject::getType = base + 0x989e0

GameObject::setType = base + 0x989f0

GameObject::getStartPos = base + 0x98a00

GameObject.uuid = GameObject + 0x2fc

GameObject.type = GameObject + 0x300

GameObject.id = GameObject + 0x360
```