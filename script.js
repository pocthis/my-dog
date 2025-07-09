document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Swiper 轮播图
    const swiper = new Swiper('#hero', {
        loop: true, // 循环播放
        autoplay: {
            delay: 5000, // 5秒自动播放
            disableOnInteraction: false, // 用户交互后不停止自动播放
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 平滑滚动到锚点
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 可以在这里添加更多交互功能，例如：
    // - 图片放大效果（LightBox）
    // - 视频播放控制
    // - 新闻加载等
});
