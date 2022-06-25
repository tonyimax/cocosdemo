
import { _decorator, Component, Node,sp,Texture2D, ImageAsset } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = skin
 * DateTime = Thu Jun 23 2022 23:23:14 GMT+0800 (China Standard Time)
 * Author = metrox
 * FileBasename = skin.ts
 * FileBasenameNoExtension = skin
 * URL = db://assets/skin.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('skin')
export class skin extends Component {

    @property(sp.Skeleton)
    ske:sp.Skeleton | null = null;
    skinId:number=0;
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    change() {
        const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.ske!.setSkin(skins[this.skinId]);
    }

    changePart() {
        const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.ske!.setSkin(skins[this.skinId]);
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
