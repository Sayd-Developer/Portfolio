import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    /* background: #000000; */
    width: 100%;
    height: 10%;
    overflow: hidden;
    justify-content: space-between;

.names {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    text-decoration: none;
    width: 30%;
    margin-left: 2%;
}

.pictures {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    width: 10%;
    margin-right: 2%;
}

li {
    border: solid 1.5px #fff;
    display: flex;
    color: #fff;
    padding: 0.5em;
    border-radius: 2px;

     &:hover {
        background: #2980b9;
        transition: 0.3s ease-in-out;
    }
}
`
export const StyledLink = styled(Link)`
    list-style: none;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
`