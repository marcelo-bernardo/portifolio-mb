export const profile = {
  name: 'Marcelo Bernardo',
  role: 'Desenvolvedor & Técnico em Informática',
  intro: 'Transformo ideias em software — do rascunho no papel ao código em produção.',
  bioParagraphs: [
    'Sou Técnico em Informática para Internet pelo IFAM, e estudante de Tecnologia da Informação pela PUC e pela UFMS. Gosto de entender o problema antes de escrever a primeira linha de código.',
    'Trabalho com sistemas, automações e jogos digitais — sempre buscando um equilíbrio entre código limpo e um resultado que realmente resolva algo para quem vai usar.',
  ],
  quote: 'Transformar ideias em código é mais do que uma habilidade; é a minha motivação diária.',
  facts: [
    { label: 'Formação', value: 'Téc. em Informática (IFAM) · TI (PUC / UFMS)' },
    { label: 'Foco atual', value: 'Desenvolvimento web & automações' },
    { label: 'Baseado em', value: 'Manaus, AM — Brasil' },
    { label: 'Disponibilidade', value: 'Aberto a novos projetos' },
  ],
  cvUrl: '/curriculo.pdf',
  email: 'marcelobernardo501@gmail.com',
  phone: '+55 92 99438-1852',
};

export const projects = [
  {
    id: '01',
    title: 'Minimercado',
    description: 'Interface de controle de vendas e estoque, pensada para o dia a dia de um pequeno comércio.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    url: 'https://github.com/marcelo-bernardo/proj_minimercado',
  },
  {
    id: '02',
    title: 'Jogo Interativo Demo',
    description: 'Jogo em JavaScript orientado a objetos, com navegação entre salas e objetos interativos.',
    stack: ['JavaScript', 'POO'],
    url: 'https://github.com/marcelo-bernardo/Jogo_demo_adventure',
  },
  {
    id: '03',
    title: 'Análise de Dados Meteorológicos',
    description: 'Aplicação em Python que processa dados de temperatura e gera alertas automáticos.',
    stack: ['Python', 'Pandas'],
    url: 'https://github.com/marcelo-bernardo/analise_dados-meterologicos',
  },
];

export const skillGroups = [
  {
    title: 'Linguagens',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Ferramentas',
    items: ['Git & GitHub', 'MySQL', 'Linux', 'VS Code', 'WordPress'],
  },
  {
    title: 'Frameworks',
    items: ['Bootstrap', 'Pico CSS', 'Pandas', 'Laravel'],
  },
];

export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'marceo-bernardo-de-miranda',
    url: 'https://linkedin.com/in/marceo-bernardo-de-miranda',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'marceo-bernardo',
    url: 'https://github.com/marceo-bernardo',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+55 92 99438-1852',
    url: 'https://wa.me/5592994381852',
  },
];

export const navItems = [
  { key: 'inicio', label: 'Início' },
  { key: 'sobre', label: 'Sobre' },
  { key: 'projetos', label: 'Projetos' },
  { key: 'habilidades', label: 'Habilidades' },
  { key: 'contatos', label: 'Contato' },
];
