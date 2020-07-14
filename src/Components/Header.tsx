/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService';
import { RouteComponentProps, withRouter } from 'react-router';
import '../css/Header.css'
import { FaRegEnvelopeOpen } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi";

type PathParamsType = {

}

type PropsType = RouteComponentProps<PathParamsType> & {

}
class Header extends Component<PropsType>{

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLogged();
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-light bg-light mb-3"> 
                    {/* <nav className="navbar navbar-custom navbar-expand-md ma4"> */}
                        <div><a href="https://propit.co.il/" className="navbar-brand"> <img alt="PROPIT" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbUAAABzCAMAAAAosmzyAAAAn1BMVEX///8AAABOrHnw8PA6OjorKyuJiYnq6urGxsb2+/i3t7eurq7x+fVHqnWRx6im1LrOzs7F49OHxqNfs4V6enr4+Pjd3d2ZmZkNDQ3j4+NoaGiQkJDb29vV1dUXFxeioqJFRUUdHR0yMjKysrKCgoJwcHBSUlK328c+Pj5jY2Ocz7K+vr4tLS1JSUlcXFyMjIzY7OFruI04pWzl8uvV697P36mcAAAN9klEQVR4nO2daYOiuhKGZZTWkenbzLQoiBtuo4N2n5lz//9vu4QlVGVhS/ToPXk/daOUIQ9JKlul13t+9d14vT+f7GjlW/4qulwPoRMv/ulU3VRev4u8CovaDVYpiA+RJZS/Dd1+ExN3Su9Xfer14pXdXpft6Xp+GU2Fae9gz7a3p83HxFk2ymaqwLlKkOW6nEfDOiN9v3N6d4uK9H79++9v8P+3d1368r03rnzsGl3DgE+uisHtwW36Fnu7jyYW7TqLQ6X0TpZi61/ffn/58v7jr/LKr9cvmvSqSC3RfKqTWqKT04RZP7QbWzzubkYt0XUsMPrt9yuB9Pr6k156eyRqljVh3jZlg9GoFtqsnUW7wqIqteQ9W3JGf7+WOfyY1CwL54kGg4dqZuNVa4sfgqpcFzXLChmbP//QHH5/WGoWqiR0GPyoaIuGjdozTrMbUrMm2OaPktBr0bQ9HjUr1kytApvjdzS54SsybdSsPTT59R1l8cNSs0CO6DE4FzPz9lU3+VElUqFXoocaqiSfhtqq7BfpMWgJXcm+sHaMTufZ2F0upkEwXSyXo9l5EAlthoISrIkaaiVENeRDef6FyrKhyaAl8B+GA/5r0UTUkw5Gwq7BnMemi5oFTIu8kVtRO/SHjRQslvH6zCaaOpLg2rihxeF0tJuwldsHX9IiLqteXJ5YocWa9zV5o4DaYNo0uUtBemHT9s57/l+/VeprWT5ff9V9F1KbcE9UqfiIEn0UUKvveKFcfsHZwHoPfTafotoOebxhsR3Zr0Bq7QbUlkwbC+7+9s71suv0n5LaW+2Xu1NL3DlhJnemluTgFRpkem1exACQ+fI4jexdZ/Y3O1NLuKEaG/Xa3n4ntSMc0arT3aj1XPj2FzWEArVebw7ujnB7xdTJZ2m/Gat/qIatQq3nQWxb1GiSWq6NqftR68Ug0af8mhI1byO7nRnEalTQMo2ZmhWnSolarw+bzobvkVh3pAYLgJ+PIytR67ngdti+j3DOVzghvKYXdG+E4KhR662B4Ubj3jLdkxrM5JyRGrUe8HGAw+dtUca3nKn2TuhuNJChSK1/kdhtq3tSg4wc7koXamF5+6lsKJB76bevipCbg7xTRWqwtmEdnVa6KzUwWJG/aorUQOmNKJ0FgiYeUKwULm3Q/VelBqrITfGW/fWLqrHrf1dqoM+SD48oUusDPHTGFfmBomnIWk1Rjxs0i6rUwFt2Ke7//uc1158fTe3clRpw7fJmSB81WpPBa3WTbzLFEhuq1EA1QLsq30sC/2JqyOvvkrVEqLyWXUFVatNnpAbcBO01JHUVYYdr3SWVrGHgpGusIW1aQz46Ne3eyLK8fZW3awHM7y6JzAS8U+tKr2r0RqjP++jUPJAT+aSjIjVQeLd5LsIKssWYCCtU2OhVVWrgtaWzVY9ODU7PaellwyGtwkGHU6Eqo0bQDl0zoUgtiMr7aS/7wanB0dNVnqFq1OAIUZ4gDzRrg/YWS8E5Cto8KlKbAJt0hcODU4MzTJv8mhK1BexW5eUB1myf7dNYCraP9GHVqKH+BL39samhcaZiekmFGoJWuOcjFYtIwHoxQ6FGDY1plx7OI1OL8YhuMZDRPY/7eHK46ArDSrPDYBYQHI0srilQC+BsIOyT3JNaiyHr/jIOLSw63ACuNZ9P8YKRc2QsFr018Et27RaZSsG3ovDSAbVT8/1N3jRe45cW9knuSS06DZrJXgmWHdIxQ3Dt0tDiVrSOkRZ9QV+go2AXQkDNb/j8g4sovaD7f09qSir7UZoMlm07KCEtSoNIO2BeQE1JG/A7z0INTGDqMQgWoeujBj0+zdR8uCPsWaiBmkuPQTAGoq+GhB02zdTQ9NFzUPOhk6DDIBoj1ueN1LRrCsJzfk9B7QOVAA0G5auz1EIbwIGM4poOaiumQ/IE1HxmaZJ6Jrzg1gv6EK3WZnECyxC2xTUN1Njdso9PbRuyTY2iQX/C7vSGA1FKi9fgPB3tXqpS8yd8z/+xqdnzEe8eqBiMjmu+5YKzQdwy/TYCU3elt6NEzT86opb2Qan50XZzWC+FvkH3PPhcCudh4MRCpOL6w6Ex6j50pBZdTudwxAWAyHRPah/uqJnc5bTCAy8N+k6dpRhtMpMNqcGBKJXhYzgERR8AULvETTPAXQyrXp9HHj2WCFCrn8JEMx0yXwPWB/wGtMaCiyojerXbOGS1npuapAKBwsP8kmyDX+k+mQ0XaZWdeNUVCCL931ProS1gkrWOcOlA52XZ0BcBMz6GWqqW1MB6QguHwCiFJh+7dtkg+k152VBL1ZIaXqIaiYesoNNid8tb9DNgAMpQS9WWWg/NhorrSLSXWBKKpFpwyxba1WmopWpNbYgWiwhHPzzUQ+iw5GeIpjFhuBhDLVVraoz7L3QS8VfYaGO1wtTRAIuhlqo9NbzW6yr8Cg7q0zKpwwjdjQYODbVUHajhPYHC/RcBXqlxbpPBLoaGS6qhlqoDNcb9b1BHWpfGHQCPiZ7ADEAbaqm6UEMDu5KBfSbyjzVpNq89YsP7MGgMtVSdqGH3X7xHjQvdJQpBx2jJBbljZ8MMtVTdqKFtSpIlxnipL9G+ci2yt7tyd3A3GGqpulHD7ZZk9J0NrpRo9TkSf3c6FsSS9Pl1J4Zaqo7U8Oj/i/g7nzwIMgG+j5eLIDvPwvOGwdJdHwaiqKwXUcxJQ42oKzUPVWeS2U/ktWB229PmerxuBrY0AvlVRMVQS9WVGg4FY0s8jVHXYNXCQKw9Qy1XZ2q4IMlS0+dcyWbyJSdoGGqpulPD7r+0Gw3XRzbWXEbEUEulQA2uobN8eR62PPAk6bfL1ywbaqkUqOFJ64rQSx47UFLNrGphl6GWSoUadv+rwpw1PxTqXD1i+ZTUQCPRMawYK5Bh7fdSIPd/Vbkeqx+fo1pkm7DuzYHrIbVR6xKzrrynntoinBUSr7RprVmpDrmwmB+oznUxs4aj/VbeE4g+1g0233tlBqx1rYf8+yfV9/pvZ/pOb3n7r6ZkPLCCkXNg97Vb/jEcq22/MbqHhu4oHu+c3TgeLXQVGSMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjo2fRRTHup9GtNT4cZj3v5TAHi7G2htqDa05iUJCYyGBXvaH26DqSTdYLy7qAa/8eas4LEQxftU6vhDN2U8Nu/5IpXDOriuPik0xwzfCaXg25pcAhvOmzYqXyIrW/hwsdhzaJyb/DARMSapfC3r5cb+6An9nDp8rMwv0ELn2SffVp6u5eZjT9tc8Zu1y+/1lkA7sQfohyD5JYlJ/MdmiZZxZZAEampWvtjzikB9zMjhdzM1uTriJjRAe8wBTvxa1Y1Z/vtYFcp2mc5D2OaoAWIbOPyKc833kF4y2D6HiSveG58F5jmB3Fr53wFgMQ4J75BG2SRWFLUYiBFVzSP+e+W2a0j3IZHj2B4xqhSIC4lsJBWk7wLnQOduVeDAE1N927fQQRjHs4jiQ46aaGGsSjgVq5mRUtWg/gO4qwYWowkCIT0AjYcx1nxRB2iGYniznomFBLPyK7x1bwE7Kfar9LP3NsXHBjhxTEefLhzGYfZOzk2p2rqQ2d3QdDLSSFydvivM0NjsmrAuqJUfYjJP2hA2uuJFE+xhNkX52t6qhNadpDhppLrobpvldYVxFqZ5JHpMpCQbf7hSlnbWNqgbNL7KzW+V24zY6E4YQDBnxKLfvrhcl/EjOzqI+3rLG4+PLIkh4tH9bte0p/ElKbnT8TmoezaNsMCSwo8ErIri8utE8kxCO5LNRU/Fh7prgSalkF9SGNOUuOLmCClh6LRxlYuF6RUPOSn7nCKrKkRvIf1rIEcFFlRuxOOFLWUiIk7pwktGM9tb3FhcCSamcJIyg7bFnvZeddC/BILgu1EFPrJ097AikuqYnenvwejtqQ1gUT5uwtGbXkjd00o0YaiGKrqcUGSz0U56ZxWeElyv7SS20gjnyhlxpNu4Ra6ryBZyqpjdl0UFM8tbIgv1iMw6ZMjaDKLZCAWMhn9miVyWWFTd0TrdRIDHjRORxaqa1pgZFRm2GvI6CvMylrsKtQkuGplWm+DbW8Idmxxj2ah1xWRPSwea3USDpFm4v/AWrg54aTwzyLecJSW1RQw75EgyMo2lCzaYz8CXuOJPFUstSKytoNqHmsj1boztRCi/HwC7WhlngudvbXDahdi/wPuNqJOiP3ora2cBRxqjtTO8pcxRbUhlvq2+31UzvkpyN4c652mtDsvg81byM7qUFETeLia6DmWrLjWcbNqQHbNyhrn8l7NfU892ixcUs80uHwUj9pehdqrsQXEVHzPKFfWyS1aoO3nFpmIY4YNvn1xF1sUdaKjE7uukFZIxlyGaRjNozPTc5YIJl43g7IKOHtqR0kvoiAWmxzaRrb6enz5HK0PVdgk1PbXxIDhBkuasPNNj/a3m5OjRSwpJYd2ZlFzdTKEEFH5kmDPEn5eOTNqZGoL+IjAXhqOz5NaER104kaHfXEEWVxbPuG1I5ZlhfjkU2oWfhEl/Qtzv4iVlCnLDfrH7iQVessq4pjJlHdZbVwkJpSI5YkZ8Zy1Bw+TYjaoBE10j2E47X56PGJaevgobY8tcxAnxnEJbMipEdbFIomh88tXRcNvASumz90P/kLZSG5kFwSPGVx0zL9hot+t/wB8q3qMCFNqS3llobsR30+TUMXqCo0UGnMS/6CvuKU3Drl0uBByyj3gIEk9VPmk6BMaE0WPaDajGgZPYoMtWeUofaMMtRK/Q8cBz10XUypyQAAAABJRU5ErkJggg=="
                            width="100" height="30" /></a></div>
                        <ul className="navbar-nav">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <FaRegEnvelopeOpen size="20px" className="justifyContent:50px" />
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <FiPhoneCall size="20px" color="black" />
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <>077-9985041</>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li className="nav-link"><Link to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}>'</Link></li>}
                        </ul>
                        <ul className="navbar-nav ">
                            {isUserLoggedIn && <li className="nav-item g"><Link className="nav-link " to="/welcome"><h6>לידים חמים 🔥</h6> </Link></li>}
                            {isUserLoggedIn && <li className="nav-item "><Link className="nav-link" to="/welcome">קבל הצעות אישיות</Link></li>}
                            {isUserLoggedIn && <li className="nav-item "><Link className="nav-link" to="/welcome">תגמול שותפים</Link></li>}
                            {isUserLoggedIn && <li className="nav-item hover-green "><Link className="nav-link" to="/welcome">הוספת נכס</Link></li>}
                            {isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/welcome">מחשבון שטחים</Link></li>}
                            {isUserLoggedIn && <li className="nav-item"><Link className="nav-link"  to="/todos">מועדפים</Link></li>}
                            {isUserLoggedIn &&<div className="btn-group border size=20">
                              
                                <a  className="btn btn-success">מגורים</a>
                                <a  className="btn btn-default">מסחרי</a>
                            </div>}
                        </ul>
             
                    </nav>


        
                

                </header>

            </div>


        )


    }



}
export default withRouter(Header);