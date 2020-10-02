function RollingBanner() {
    //프로퍼티 생성 및 초기화
    this.$slide_img = null;
    this._currentIndex = 0;
    //단계 3
    this._timerId = -1;
    this._init();
    this._initBannerPos();
    //단계3
    this.startAutoPlay();

}

RollingBanner.prototype._init = function () {
    this.$slide_img = $(".slide_img");
}
RollingBanner.prototype._initBannerPos = function () {
    //배너위치 보이지 않게
    this.$slide_img.css("left", "236px");
    //0번째 배너 활성화
    this.$slide_img.eq(this._currentIndex).css("left", 0);
}
//단계 3
RollingBanner.prototype.startAutoPlay = function () {
    let objThis = this;
    //타이머가 두 번이상 실행되지 않게 조건 처리
    if (this._timerId == -1) {
        this._timerId = setInterval(function () {
            objThis.nextBanner();
        }, 2000)
    }
}
//단계 3 => 다음 배너 활성화
RollingBanner.prototype.nextBanner = function () {
    //현재 index값 구하기
    let outIndex = this._currentIndex;
    //다음 index값 구하기
    this._currentIndex++;
    //마지막 배너까지 롤링한 경우 다시 0번째 부터 롤링될 수 있게
    //index 값을 0으로 설정
    if (this._currentIndex >= this.$slide_img.length) {
        this._currentIndex = 0; //배열의 끝이면 0번째 index로
    }
    //현재 배너 구하기
    let $outBanner = this.$slide_img.eq(outIndex);
    //다음 배너 구하기
    let $inBanner = this.$slide_img.eq(this._currentIndex);

    $inBanner.css({
        left: "236px",
        opacity: 0
    });
    $outBanner.stop().animate({
        left: "-236px",
        opacity: 0
    }, {
        duration: 600,
        step: function (current) {
        }
    });
    $inBanner.stop().animate({
        left: 0,
        opacity: 1
    }, 600);
}