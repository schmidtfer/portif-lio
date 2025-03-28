import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione
      possimus officia voluptate quasi verityatis numquam debitis veniam nihil,
      placeat magni fugiat impedit ipsam quaerat sunt dolorem non deleniti
      aperiam.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=schmidtfer&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />

      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=schmidtfer&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
