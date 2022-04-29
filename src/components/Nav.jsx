import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Nav() {
    return (

        <div className='fotodiv'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">

                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">SAMFITNESS</a>


                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Paketler</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Blog Yazıları</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">s</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>

                            </form>
                            <button type="button" class="btn btn-outline-warning-grs">Giriş Yap</button>
                            <button type="button" class="btn btn-outline-warning-kyt">Kayıt ol</button>
                        </div>
                    </div>
                </nav>
                <div class="tatsu-inline-text-inner ">
                    <h1>#
                        <span>GEREK YOK</span>

                    </h1>
                    <div className='iletisim'>
                        <a className='insta' href="https://www.instagram.com">
                            <FaInstagram />
                        </a>

                        <a className='mail' href="https://mail.google.com"> <SiGmail /></a>

                        <a className='wp' href="https://web.whatsapp.com"> <SiWhatsapp /> </a>
                    </div>
                </div>

                <button type="button" class="btn btn-outline-warning">PROGRAMLAR</button>
            </div>


        </div>


    )
}

export default Nav