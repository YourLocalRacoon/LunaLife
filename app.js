function render(){
  const main = $('#main');

  try {
    const pages = {
      home,
      schedule,
      nutrition,
      cycle,
      wellness,
      habits,
      lists,
      journal,
      settings
    };

    if (!pages[page]) {
      throw new Error('Unknown page: ' + page);
    }

    main.innerHTML = pages[page]();

    document.querySelectorAll(
      '#nav [data-page], #mobile-nav [data-page]'
    ).forEach(b => {
      b.classList.toggle('active', b.dataset.page === page);
    });

    const moreButton = $('#mobile-more-button');

    if (moreButton) {
      moreButton.classList.toggle(
        'active',
        ['wellness','habits','lists','journal','settings'].includes(page)
      );
    }

    const menu = $('#mobile-more-menu');

    if (menu) menu.hidden = true;

    moreButton?.setAttribute('aria-expanded', 'false');

  } catch (error) {
    console.error('LunaLife rendering error:', error);

    main.innerHTML = `
      <div class="card" style="margin:30px;padding:24px">
        <h2>Something interrupted LunaLife ✨</h2>
        <p>The planner could not load this page.</p>
        <p><b>Error:</b></p>
        <pre style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(error.message || String(error))}</pre>
        <p>Please share this error so we can repair it.</p>
      </div>
    `;
  }
}
