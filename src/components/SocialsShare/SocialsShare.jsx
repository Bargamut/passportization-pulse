import * as React from 'react';

class SocialShare extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this.handleClick.bind(this);
  }

  share2Socials(socBtn) {
    var title = document.querySelector('meta[property="og:title"]').getAttribute('content'),
      preview = document.querySelector('meta[property="og:image:url"]').getAttribute('content'),
      desc = `${document.querySelector('meta[property="og:description"]').getAttribute('content')}
        <br /><br /><a href="${window.location.href}">${title}</a>`;

    var u = encodeURIComponent(window.location.href),
      i = encodeURIComponent(preview),
      t = encodeURIComponent(title),
      e = encodeURIComponent(`<img src="${preview}" style="float: left; max-width: 50%;">${desc}`),
      ctw = encodeURIComponent(title),
      v = encodeURIComponent('Bargamut');

    var urls = {
      vk: `//vkontakte.ru/share.php?url=${u}&image=${i}&description=${t}`,
      fb: `//www.facebook.com/sharer.php?u=${u}&i=${i}&t=${t}`,
      tw: `//twitter.com/intent/tweet?url=${u}&text=${ctw}&via=${v}`,
      lj: `//www.livejournal.com/update.bml?event=${e}&subject=${t}`
    };

    window.open(urls[socBtn.dataset.soc], 'sharer', 'toolbar=0,status=0,width=626,height=436');
  }

  handleClick(evt) {
    if (!evt.target.classList.contains(`social-shares__link`)) return;

    evt.preventDefault();

    this.share2Socials(evt.target);
  }

  render() {
    return (
      <div className="social-shares" onClick={this._handleClick}>
        <a className="social-shares__link social-icon__vk" data-soc="vk" title="Поделиться ВКонтакте" href="#">Поделиться ВКонтакте</a>
        <a className="social-shares__link social-icon__fb" data-soc="fb" title="Поделиться в Facebook" href="#">Поделиться в Facebook</a>
        <a className="social-shares__link social-icon__tw" data-soc="tw" title="Поделиться в Twitter" href="#">Поделиться в Twitter</a>
      </div>
    );
  }
}

export default SocialShare;
