import React from 'react';

export default function MobileMenu(props) {
  const { mobileMenu, page } = props;
  return (
    <div class="mobile-menu hidden-md hidden-lg">
      <div class="mobile-cover" style={mobileMenu ? { right: '70vw' } : { right: '0' }}></div>
      <div class="hidden-md hidden-lg lis new-lis">
        <a href="/prepare" class={page == 2 ? 'active' : ''}>
          Prepare
        </a>
      </div>
      <div class="hidden-md hidden-lg lis new-lis">
        <a href="/assess" class={page == 3 || page == 5 ? 'active' : ''}>
          Assess
        </a>
      </div>
      <div class="lis new-lis">
        <a href="/resources" class={page == 6 || page == 8 ? 'active' : ''}>
          Resources
        </a>
      </div>
      {/*<ul class="hidden-md hidden-lg resources-ul">
        <a href="/report">
          <li>
            <p style={page == 8?{textDecoration : "underline"}:{}}>Refer</p>
          </li>
        </a>
        <a href="/resources?id=0">
          <li onClick= {this._onResourcesClick}>
            <p style={page == 6?{textDecoration : "underline"}:{}}>Victim Services</p>
          </li>
        </a>
      </ul>*/}
      <div class="hidden-md hidden-lg lis new-lis">
        <a href="/statute" class={page == 7 ? 'active' : ''}>
          MA Law
        </a>
      </div>
      <div class="hidden-md hidden-lg lis new-lis">
        <a href="/about" class={page == 9 ? 'active' : ''}>
          About Us
        </a>
      </div>
    </div>
  );
}
