import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #fff;
    color: #fff;

    .card {
        max-width: 900px;
        width: 100%;
        display: flex;
        justify-content: center;
        
        .banner{
            width: 50%;
        }
        
        .description {
            width: 50%;
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                align-items: center;
                color: white;
                font-size: 30px;
                font-weight: 700;
                padding-bottom: 20px;
                text-transform: uppercase;
            }
    
            li{
                list-style: none;
                padding: 5px 0
            }
        
            button{
                width: 200px;
                margin-top: 50px;
                cursor: pointer;
                border: 1px solid #fff;
                background: #000;
                padding: 20px;
                color: #fff;
                text-transform: uppercase;
                transition: 0.3s;
    
            &:hover{
                border: 1px solid #f7b80a;
                color: #f7b80a;
                background: #252525
            }

        }

        
    }
`