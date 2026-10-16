document.addEventListener('DOMContentLoaded',()=>{
  const music=document.getElementById('site-music');
  const musicToggle=document.getElementById('music-toggle');
  if(music&&musicToggle){
    music.loop=true;
    const paint=()=>{const playing=!music.paused;musicToggle.classList.toggle('is-playing',playing);musicToggle.textContent=playing?'♫ MUSIC ON · TAP TO PAUSE':'♫ PLAY MUSIC';musicToggle.setAttribute('aria-label',playing?'Pause background music':'Play background music')};
    musicToggle.addEventListener('click',async()=>{if(music.paused){try{await music.play()}catch(e){musicToggle.textContent='TAP TO PLAY MUSIC'}}else music.pause();paint()});
    music.addEventListener('play',paint);music.addEventListener('pause',paint);
    // Attempt autoplay; browsers may require a tap before allowing sound.
    music.play().then(paint).catch(paint);
  }
  const modal=document.getElementById('info-modal');
  const title=document.getElementById('modal-title');
  const copy=document.getElementById('modal-copy');
  const messages={
    location:['FIND US IN NEW CAIRO','EL LEWA Kebab & Kofta is designed for a refined dining experience in one of Cairo’s most prestigious areas. The exact address will be added once confirmed.'],
    opening:['OPENING 2027','We look forward to welcoming you in 2027 for premium kebabs, kofta, and a memorable dining experience.'],
    experience:['A PREMIUM GRILL EXPERIENCE','Discover charcoal-grilled kebabs, signature kofta, fresh sides, and warm hospitality.'],
    order:['ORDER NOW','Thanks for choosing EL LEWA. The menu button is interactive; to accept real orders, connect the restaurant’s WhatsApp number or online ordering URL.']
  };
  document.querySelectorAll('[data-modal]').forEach(btn=>btn.addEventListener('click',()=>{if(!modal)return;const key=btn.dataset.modal;const item=messages[key]||messages.order;title.textContent=item[0];copy.textContent=item[1];modal.hidden=false}));
  const closeModal=()=>{if(modal)modal.hidden=true};
  document.querySelector('.modal-close')?.addEventListener('click',closeModal);
  document.getElementById('modal-ok')?.addEventListener('click',closeModal);
  modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  const lightbox=document.getElementById('menu-lightbox');
  const menuArt=document.getElementById('menu-art');
  const openLightbox=()=>{if(lightbox)lightbox.hidden=false};
  const closeLightbox=()=>{if(lightbox)lightbox.hidden=true};
  document.getElementById('zoom-menu')?.addEventListener('click',openLightbox);
  menuArt?.addEventListener('click',openLightbox);
  document.getElementById('close-lightbox')?.addEventListener('click',closeLightbox);
  lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeLightbox()}});
});
