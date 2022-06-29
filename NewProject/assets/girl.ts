import { _decorator, Component, Node,sp, Button, SpriteComponent, resources } from 'cc';
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

    firstSkinPath:number=0;

    isBoySkin:boolean=false;

    aniname:string[] = ['dance','walk'];

    skinpath:string[]=["girl/mix-and-match-pro","spineboy/spineboy-pro"];

    start() {

    }

    update(deltaTime: number) {
        
    }

    //播放动画
    playAnimation(){
        this.SkeObj.setAnimation(0,this.aniname[this.firstSkinPath],true);
    }
    //停止动画
    stopAnimation(){
       let SpEnt:sp.spine.TrackEntry =  this.SkeObj.setAnimation(0,this.aniname[this.firstSkinPath],true);
       SpEnt.animationStart = SpEnt.animationEnd;
    }
    //换肤
    changeSkin() {
        const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.SkeObj!.setSkin(skins[this.skinId]);
    }

    changeSkeletonData(){
        this.firstSkinPath = (this.firstSkinPath + 1) % this.skinpath.length;
        resources.load(this.skinpath[this.firstSkinPath],sp.SkeletonData,(err,skedata)=>{
            this.SkeObj.skeletonData = skedata;
            if(this.aniname[this.firstSkinPath]=='dance'){
                this.SkeObj.setSkin('full-skins/girl-spring-dress');
            }
            this.SkeObj.setAnimation(0,this.aniname[this.firstSkinPath],true);
        });
    }
}

