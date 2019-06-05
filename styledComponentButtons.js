import styled from 'vue-styled-components';

export const ButtonContainer = styled.button`
    background:transparent;
    font-size:1.2rem;
    border:0.05rem solid var(--mainWhite);
    border-radius:0.5rem;
    color:var(--mainWhite);
    margin:0.2rem 0.5rem;
    padding:0.2rem 0.5rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background:var(--mainWhite);
        color:red;
    }
    &:focus{
        outline:none;
    }      
`;
