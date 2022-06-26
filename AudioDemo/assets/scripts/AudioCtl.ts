import { _decorator, Component, Node, AudioSource, Slider, SliderComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioCtl')
export class AudioCtl extends Component {
    @property(AudioSource)
    audio?:AudioSource;
    start() {
       this.audio.play();
       this.schedule(()=>{
            //console.log(`当前音频播放进度: ${this.audio.currentTime / this.audio.duration}`);
            this.node.getChildByName('SliderTimeLine').getComponent(SliderComponent).progress  = this.audio.currentTime / this.audio.duration; 
       },1);

       setInterval(()=>{
        console.log("每秒调用一次" + Date.now());
        let newDate = new Date();
        console.log(`${newDate.getFullYear()}-${newDate.getUTCMonth()}-${newDate.getDate()} ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()} : ${newDate.getMilliseconds()}`);
       },1000);

    }

    update(deltaTime: number) {
        //console.log(this.audio.currentTime / this.audio.duration);
    }

    play(){
        if(!this.audio.playing){
            this.audio.play()
        };
    }

    stop(){
        if(this.audio){
            this.audio.stop();
        }
    }

    pause(){
        if(this.audio.playing){
            this.audio.pause();
        }
    }

    setVol(e:Slider){
        console.log(e.progress);
        this.audio.volume = e.progress;
    }

    setTimeLine(e:Slider){
        this.pause();//调整播放进度时先暂停,不然会出现杂音
        this.audio.currentTime = e.progress * this.audio.duration;
        this.play();//调整好播放进度后再播放
    }
}

