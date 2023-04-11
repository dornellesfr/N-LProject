/* eslint-disable class-methods-use-this */
import React from 'react';
import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';
// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';

const style = {
  body: {
    color: 'white',
    borderBottom: '1px solid white',
    padding: '8px',
    textIndent: '30px',
  },
  time: {
    color: 'white',
  },
  title: {
    color: '#de0707',
  },
};

const contents = [
  {
    time: '2013',
    title: 'Constituição de N&L prestadora de Serviços Ltda.',
    history: 'A N&L prestadora de Serviços Ltda. foi constituída em 2013, na cidade de Taquari, pelo sócio proprietário Marcelo Vieira Rocha. As letras do nome da empresa têm como motivo as iniciais dos dois primeiros filhos do casal (Marcelo e Luana) Nestor e Luíza.',
  },
  {
    time: '2013',
    title: 'Primeiros passos',
    history: 'No início, a intenção por trás da fundação da empresa era melhorar a renda da família, fazendo uso das máquinas que já haviam sido adquiridas para a lavoura de arroz. Com o intuito de prestar serviços à comunidade, foram disponibilizados serviços de aluguel de máquinas, incluindo roçadeira articulada e trator com arado, no objetivo de auxiliar na construção e manutenção de rodovias.',
  },
  {
    time: '2014',
    title: 'Expandindo a atuação',
    history: 'Em 2014, decidimos investir em uma escavadeira hidráulica para atender aos amigos e clientes da área da agricultura,aproveitando nossa ampla experiência nesse segmento.',
  },
  {
    time: '2017',
    title: 'Mudança de sede',
    history: 'Em 2017, a empresa fechou contrato na região de Bagé, o que resultou em um investimento em mais máquinas e mudança da família para esta cidade.',
  },
  {
    time: 'XXX',
    title: 'Constituição de Mariana Terraplanagem',
    history: 'A empresa Mariana Terraplanagem, que tem como nome a terceira filha do casal, sendo que foi criada com a intenção de complementar os serviços da N&L. As atividades dessa nova empresa envolvem a realização de obras utilizando o maquinário para construção e manutenção de estradas e rodovias.',
  },
  {
    time: 'Atualmente',
    title: 'Empreendimento em franco desenvolvimento',
    history: 'Na sequência, as empresas foram se desenvolvendo e se aperfeiçoando na área de abertura e manutenção de estradas no setor florestal. Hoje, contam com colaboradores capacitados e máquinas adequadas para o setor, fato que é muito importante para a economia da região.',
  },
];

class TimeLineEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refs: [] };
    this.observer = null;
  }

  componentDidMount() {
    const refs = this.createRefs();
    this.setState({ refs });
    setTimeout(() => this.startIntersectionObserver(), 600);
    setTimeout(() => this.setRootMargin, 800);
  }

  getRootMargin = () => {
    let rootMargin;
    const width = document.body.clientWidt;
    if (width >= 768) {
      rootMargin = '-175px';
    } else if (width >= 450 && width < 768) {
      rootMargin = '-125px';
    } else {
      rootMargin = '-50px';
    }
    return rootMargin;
  };

  setRootMargin = () => {
    window.addEventListener('resize', debounce(() => {
      const rootMargin = this.getRootMargin();
      this.startIntersectionObserver(rootMargin);
    }, 700));
  };

  startIntersectionObserver = (_rootMargin) => {
    const rootMargin = _rootMargin || this.getRootMargin();
    const { refs } = this.state;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-30', 'blur-sm');
          } else {
            entry.target.classList.add('opacity-30', 'blur-sm');
          }
        });
      },
      { root: null, rootMargin, threshold: 1 },
    );
    refs.forEach((ref) => {
      if (ref.current) {
        this.observer.observe(ref.current);
      }
    });
  };

  createRefs() {
    const refs = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < contents.length; i++) {
      refs.push(React.createRef());
    }
    return refs;
  }

  render() {
    const { refs } = this.state;
    return (
      <Timeline className="animate_animated animate_zoomIn">
        {contents.map((content, i) => (
          <div className="opacity-30 blur-sm transition-all" ref={refs[i]} key={content.title}>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time style={style.time}>
                  {content.time}
                </Timeline.Time>
                <Timeline.Title style={style.title}>
                  {content.title}
                </Timeline.Title>
                <Timeline.Body style={style.body}>
                  {content.history}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </div>
        ))}
        ;
      </Timeline>
    );
  }
}

export default TimeLineEmp;
