function RollingBanner(selector,img_width,img_height,direction,time) {
    //프로퍼티 생성 및 초기화
    this.$slide_img = null;
    this._currentIndex = 0;
    this.img_width = null;
    this.img_height = null;
    this.direction = null;
    this.time = null;
    //단계 3
    this._timerId = -1;
    this._init(selector,img_width,img_height,direction,time);
    this._initBannerPos();
    //단계3
    

}

RollingBanner.prototype._init = function (selector,img_width,img_height,direction,time) {
    this.$slide_img = $(selector);
    this.img_width = img_width;
    this.img_height = img_height;
    if(time == null){this.time = 10000000}
    else {this.time = time};
    // if(direction === 'pre'){this.direction = 1;}
    // else if(direction === 'next'){this.direction = -1;}
    // else alert("direction : error!!");

}
RollingBanner.prototype._initBannerPos = function () {
    //배너위치 보이지 않게
    this.$slide_img.css("left", this.img_width);
    //0번째 배너 활성화
    this.$slide_img.eq(this._currentIndex).css("left", 0);
}
//단계 3
RollingBanner.prototype.startAutoPlay = function (direction) {
    let objThis = this;
    //타이머가 두 번이상 실행되지 않게 조건 처리
    if (this._timerId == -1) {
        this._timerId = setInterval(function () {
            objThis.nextBanner(direction);
        }, this.time)
    }
}
//단계 3 => 다음 배너 활성화
RollingBanner.prototype.nextBanner = function (direction) {
    if(direction === 'pre'){this.direction = 1;}
    else if(direction === 'next'){this.direction = -1;}
    //현재 index값 구하기
    let outIndex = this._currentIndex;
    //다음 index값 구하기
    if(this.direction==1){
        this._currentIndex++;
        //마지막 배너까지 롤링한 경우 다시 0번째 부터 롤링될 수 있게
        //index 값을 0으로 설정
        if (this._currentIndex >= this.$slide_img.length) {
            this._currentIndex = 0; //배열의 끝이면 0번째 index로
        }
    }else{
        this._currentIndex--;
        if(this._currentIndex < 0){
            this._currentIndex = this.$slide_img.length-1;
        }
    }

    //현재 배너 구하기
    let $outBanner = this.$slide_img.eq(outIndex);
    //다음 배너 구하기
    let $inBanner = this.$slide_img.eq(this._currentIndex);

    $inBanner.css({
        left: this.direction*this.img_width,
        opacity: 1
    });
    $outBanner.stop().animate({
        left: this.direction*this.img_width*-1,
        opacity: 1
    },600);
    $inBanner.stop().animate({
        left: 0,
        opacity: 1
    }, 600);
}