


import React, { useEffect } from 'react';

export default function Scroll() {

  useEffect(() => {
    // Make sure Bootstrap's Scrollspy works after the component is mounted
    const scrollSpy = new window.bootstrap.ScrollSpy(document.getElementById('navbar-example2'), {
      target: '#navbar-example2',
      rootMargin: '0px 0px -40%',
      smoothScroll: true,
    });
  }, []);

  return (
    <>
      <div className="container" style={{ width: '70%', height: '400px', overflowY: 'auto',paddingTop:'20px'}}>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-4 mb-4">
          <a className="navbar-brand" href="#">Scroll me daddy</a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">First</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">Second</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Scrollspy content */}
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -30%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary p-3 rounded-2"
          tabIndex="0"
          style={{ height: '300px', overflowY: 'auto' }} // Add scroll to this container
        >
          <h4 id="scrollspyHeading1">First heading</h4>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, possimus neque consectetur, exercitationem asperiores earum mollitia corporis eveniet illum debitis dolor libero similique, nemo totam veritatis rerum sequi dicta id.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tempore possimus alias ipsam velit!</p>
          <h4 id="scrollspyHeading2">Second heading</h4>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus asperiores nemo. A quis repudiandae distinctio ipsa in nam cum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam porro possimus molestias vitae quidem!</p>
          <h4 id="scrollspyHeading3">Third heading</h4>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, omnis. Id ducimus ipsa esse distinctio deserunt dignissimos praesentium iste corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat, eius nulla rem itaque soluta.</p>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cupiditate dignissimos cumque at omnis consequatur nisi quisquam aliquam esse, sit, laboriosam neque ab. Fuga necessitatibus voluptatibus magnam doloribus dolorem dolores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia expedita culpa sit cum nostrum tenetur.</p>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit inventore ut tempora deleniti dolor quod distinctio, debitis recusandae assumenda.orem ipsum dolor sit amet consectetur adipisicing elit. Itaque, blanditiis.</p>
        </div>
      </div>
    </>
  );
}
