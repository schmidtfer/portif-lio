import styled from 'styled-components'

type BotaoProps = {
  principal: boolean //por padrão, se não passo que é false é SEMPRE TRUE
  fontSize?: string //? significa opcional
}

//PROPS de propriedade, Se o botao principal for true- ele será grenn, se false- será blue//
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-throught;
  }
`
// as  cria um link//

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
