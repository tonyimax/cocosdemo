import { _decorator, Component, Node, Button,sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GirlCtl')
export class GirlCtl extends Component {
    @property(Button)
    BtnPlay:Button|null = null;

    @property(Button)
    BtnStop:Button|null = null;

    @property(Button)
    BtnSetSkin:Button|null = null;

    skinId:number=0;

    start() {

    }

    update(deltaTime: number) {
        
    }

    BtnPlayClick(){
        this.getComponent(sp.Skeleton).setAnimation(0,"dance",true);

    }

    BtnStopClick(){
        let skeTE:sp.spine.TrackEntry = this.getComponent(sp.Skeleton).setAnimation(0,"dance",false);
        console.log(skeTE);
        skeTE.animationStart = skeTE.animationEnd;
    }

    BtnSetSkinClick(){
        const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.getComponent(sp.Skeleton).setSkin(skins[this.skinId]);
    }
}

