(() => {
    const tabs = [...document.querySelectorAll('.sec4_nav a')];
    const more = document.querySelector('.sec4_btn');
    const grids = [document.querySelector('.sec4_con1_wrap'), document.querySelector('.sec4_con2_wrap')];
    const expanded = [false, false];
    let activeTab = 0;
    function updateMore() {
        more.style.display = 'flex';
        more.classList.toggle('on', expanded[activeTab]);
        more.innerHTML = (expanded[activeTab] ? '숨기기' : '더보기') + ' <img src="/images/icon_angle.png" alt="">';
    }
    tabs.forEach((tab, index) => tab.addEventListener('click', event => {
        event.preventDefault();
        activeTab = index;
        tabs.forEach((item, i) => item.classList.toggle('on', i === index));
        document.querySelector('.sec4_nav .deco').style.left = index === 0 ? '4px' : '117px';
        grids.forEach((grid, i) => grid.style.display = i === index ? 'grid' : 'none');
        updateMore();
    }));
    more.addEventListener('click', event => {
        event.preventDefault();
        expanded[activeTab] = !expanded[activeTab];
        grids[activeTab].querySelectorAll(activeTab === 0 ? '.hi, .ta' : '.hi').forEach(card => {
            card.style.display = expanded[activeTab] ? 'block' : '';
        });
        updateMore();
    });
    const navWrap = document.querySelector('.sec1_nav_wrap');
    const nav = document.querySelector('.sec1_nav');
    const links = [...nav.querySelectorAll('a')];
    function syncNavigation() {
        navWrap.classList.toggle('on', window.scrollY >= navWrap.getBoundingClientRect().top + window.scrollY - 60);
        let current = -1;
        ['sec2', 'sec3', 'sec4'].forEach((id, i) => {
            if (document.getElementById(id).getBoundingClientRect().top <= 0) current = i;
        });
        links.forEach((link, i) => link.classList.toggle('on', current === i));
    }
    window.addEventListener('scroll', syncNavigation, {passive:true});
    window.addEventListener('resize', syncNavigation);
    updateMore();
    syncNavigation();
})();
