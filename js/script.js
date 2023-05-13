const getScrollPercent = () => {
    // スクロール量
    const scrolled = window.scrollY;
    console.log('${scrolled} スクロールされました');
}

window.addEventListener('scroll', getScrollPercent);