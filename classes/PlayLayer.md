This is the layer of gd where the level and player resides.

Here are the known addresses:
```cpp

PlayLayer::~PlayLayer = base + 0x1FAFC0

PlayLayer::onEnterTransitionDidFinish = base + 0x20DBD0

PlayLayer::onExit = base + 0x20DC00

PlayLayer::draw = base + 0x208870

PlayLayer::visit = base + 0x200020

PlayLayer::updateTweenAction = base + 0x20D1F0

PlayLayer::create = base + 0x1FB6D0

PlayLayer::init = base + 0x01FB780

PlayLayer::update = base + 0x2029C0

PlayLayer::updateReplay = base + 0x20AF40

PlayLayer::releaseButton = base + 0x111660

PlayLayer::pushButton = base + 0x111500

PlayLayer::onQuit = base + 0x20D810

PlayLayer::levelComplete = base + 0x1FD3D0

PlayLayer::timeForXPos2 = base + 0x1FD3D0

PlayLayer::togglePracticeMode = base + 0x20D0D1

PlayLayer::destroyPlayer = base + 0x20A1A0

PlayLayer::markCheckpoint = base + 0x25FB60

PlayLayer::createCheckpoint = base + 0x20B050

PlayLayer::removeLastCheckpoint = base + 0x20B830

PlayLayer::getCapacityString = base + 0x10C9B0

PlayLayer::updateAttempts = base + 0x20CED0

PlayLayer::resetLevel = base + 0x20BF00

PlayLayer::setupLevelStart = base + 0x1FB780

PlayLayer::flipGravity = base + 0x1F59D0

bool PlayLayer.isDead = PlayLayer + 0x39C

float PlayLayer.levelLength = PlayLayer + 0x3B4

bool PlayLayer.isPractice = PlayLayer + 0x495

int PlayLayer.currentAttempt = PlayLayer + 0x4A8

PlayerObject* PlayLayer.PlayerObject2 = PlayLayer + 0x228

PlayerObject* PlayLayer.PlayerObject1 = PlayLayer + 0x224

double PlayLayer.time = PlayLayer + 0x450
```
