import React from 'react';

function Copyright() {
    return (
      <div>
        {'Copyright © '}
        <a href="https://github.com/Joan-Amudu" rel='noopener noreferrer' target="_blank">
          Joan Amudu
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
    );
  }

export default function Footer(){
    return (
    <footer className="py-3, px-2, mt-auto" fixed="bottom">
      {/* Footer content goes here */}
        <a href='https://www.facebook.com/' rel='noopener noreferrer' target='_blank'>Facebook</a> |
        <a href='https://www.instagram.com/' rel='noopener noreferrer' target='_blank'>Instagram</a> |
        <a href='https://www.glo.com/' rel='noopener noreferrer' target='_blank'>Glo</a>
        <Copyright />
    
    </footer>
  );
}
