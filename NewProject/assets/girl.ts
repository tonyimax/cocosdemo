import { _decorator, Component, Node,sp, Button, SpriteComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('girl')
export class girl extends Component {
    @property(sp.Skeleton)
    SkeObj:sp.Skeleton|null = null;

    @property(Button)
    BtnStart:Button|null=null;

    @property(Button)
    BtnStop:Button|null=null;

    @property(Button)
    BtnSetSkin:Button|null=null;

    skinId:number=0;

    start() {

    }

    update(deltaTime: number) {
        
    }

    //播放动画
    playAnimation(){
        this.SkeObj.setAnimation(0,"dance",true);
    }
    //停止动画
    stopAnimation(){
       let SpEnt:sp.spine.TrackEntry =  this.SkeObj.setAnimation(0,"dance",true);
       SpEnt.animationStart = SpEnt.animationEnd;
    }
    //换肤
    changeSkin() {
        const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.SkeObj!.setSkin(skins[this.skinId]);
    }
}

