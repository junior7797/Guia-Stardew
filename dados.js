let dados = [
    {
        titulo: "Abigail",
        descricao: "Abigail é uma das personagens mais populares e queridas de Stardew Valley. Morando com seus pais, Pierre e Caroline, no Armazém da Vila, ela é conhecida por seu estilo de vida alternativo e sua paixão por artes.",
        link: "https://pt.stardewvalleywiki.com/Abigail",
        tags: "gotica traidora abi pedra casavel",
        imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/4/43/Abigail_Happy.png',
        gosto: "Melhores presentes:",
        imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png','https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png','https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png']
       
    },
    {
        titulo: "Maru",
        descricao: "Maru é uma jovem cientista apaixonada por tecnologia e robótica. Ela mora com seus pais, Robin e Demetrius, e passa a maior parte do tempo em seu laboratório.",
        link: "https://pt.stardewvalleywiki.com/Maru",
        tags: "cientista robotica inteligente casavel",
        imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/5/55/Maru_Happy.png',
        gosto: "Melhores presentes:",
        imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png','https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png','https://stardewvalleywiki.com/mediawiki/images/7/7e/Radioactive_Bar.png']
    },
    {
        titulo: "Leah",
        descricao: "Leah é uma artista solitária que vive em uma pequena casa na floresta. Ela é conhecida por sua paixão pela natureza e por seus poemas.",
        link: "https://pt.stardewvalleywiki.com/Leah",
        tags: "artista solitaria natureza poesia casavel",
        imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/c/cd/Leah_Happy.png',
        gosto: "Melhores presentes:",
        imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/8/8e/Poppyseed_Muffin.png','https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png','https://stardewvalleywiki.com/mediawiki/images/c/c8/Goat_Cheese.png']
    },
        {
            titulo: "Haley",
            descricao: "Haley é uma jovem fashionista que mora com sua irmã, Emily, na Cidade. Ela adora se arrumar e tirar fotos com os amigos.",
            link: "https://pt.stardewvalleywiki.com/Haley",
            tags: "fashionista popular vaidosa fotos loira casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/3/3c/Haley_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png','https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png','https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png']
        },
        {
            titulo: "Emily",
            descricao: "Emily é uma dançarina e artista performática que mora com sua irmã, Haley, na Cidade. Ela é apaixonada por dança e adora se expressar através da arte.",
            link: "https://pt.stardewvalleywiki.com/Emily",
            tags: "dançarina artista performática expressiva facil casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/0/0e/Emily_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png','https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png','https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png']
        },
        {
            titulo: "Penny",
            descricao: "Penny é uma Professora gentil e inteligente que mora com sua mãe, Pan, no Treiler. Ela adora ler e sonha em viajar pelo mundo.",
            link: "https://pt.stardewvalleywiki.com/Penny",
            tags: "Professora inteligente gentil casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Penny_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png','https://stardewvalleywiki.com/mediawiki/images/8/8e/Poppyseed_Muffin.png','https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png']
        },
        {
            titulo: "Alex",
            descricao: "Alex é um atleta. Ele é conhecido por sua paixão por esportes e sua natureza competitiva.",
            link: "https://pt.stardewvalleywiki.com/Alex",
            tags: "atleta esportes competitivo casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/4/47/Alex_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png','https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png','https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png']
        },
        {
            titulo: "Elliott",
            descricao: "Elliott é um escritor romântico que vive em uma pequena cabana na praia. Ele é conhecido por sua paixão por livros e por sua natureza gentil e sonhadora.",
            link: "https://pt.stardewvalleywiki.com/Elliott",
            tags: "escritor romantico sonhador casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/9/93/Elliott_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png','https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png','https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png']
        },
        {
            titulo: "Harvey",
            descricao: "Harvey é um médico gentil e atencioso que trabalha e mora na clinica. Ele é conhecido por sua natureza calma e por sua paixão por medicina.",
            link: "https://pt.stardewvalleywiki.com/Harvey",
            tags: "medico gentil atencioso casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/c/c4/Harvey_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/e/e9/Coffee.png','https://stardewvalleywiki.com/mediawiki/images/3/3d/Truffle_Oil.png','https://stardewvalleywiki.com/mediawiki/images/c/c7/Pickles.png'] 
        },
        {
            titulo: "Sam",
            descricao: "Sam é um adolescente rebelde que gosta de música e skate. Ele mora com seu pai, Kent, sua mãe Jodi e seu irmão Vincent.",
            link: "https://pt.stardewvalleywiki.com/Sam",
            tags: "rebelde musica skate loiro casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/9/98/Sam_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png','https://stardewvalleywiki.com/mediawiki/images/6/6e/Tigerseye.png','https://stardewvalleywiki.com/mediawiki/images/1/18/Maple_Bar.png']
        },
        {
            titulo: "Sebastian",
            descricao: "Sebastian é um programador tímido e inteligente que passa a maior parte do tempo em seu quarto. Ele gosta de videogames e de música.",
            link: "https://pt.stardewvalleywiki.com/Sebastian",
            tags: "programador timido inteligente casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/4/42/Sebastian_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png','https://stardewvalleywiki.com/mediawiki/images/2/23/Obsidian.png','https://stardewvalleywiki.com/mediawiki/images/5/58/Void_Egg.png']
        },
        {
            titulo: "Shane",
            descricao: "Shane é um homem solitário que trabalha na loja de joja. Ele é conhecido por seu amor por cerveja e por sua natureza introvertida.",
            link: "https://pt.stardewvalleywiki.com/Shane",
            tags: "solitario cerveja introvertido bebado casavel",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/9/92/Shane_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/b/b3/Beer.png','https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png','https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png']
        },
        
        {
            titulo: "Willy",
            descricao: "Willy é o dono da loja de peixes e um pescador experiente. Ele é conhecido por suas histórias sobre o mar e sua paixão por peixes.",
            link:"https://pt.stardewvalleywiki.com/Willy",
            tags: "pescador velho solitário mar",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/6/66/Willy_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png','https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png','https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png']
        },
        {
            titulo: "Pierre",
            descricao: "Pierre é o dono da loja geral e um pouco mesquinho. Ele é conhecido por seu amor por dinheiro e por sua família." ,
            link:"https://pt.stardewvalleywiki.com/Pierre",
            tags: "dono loja mesquinho família",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/6/66/Pierre_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png','https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png','https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png']
        },
        {
            titulo: "Caroline",
            descricao: "Caroline é a esposa de Pierre e uma ótima cozinheira. Ela é conhecida por sua gentileza e por suas receitas deliciosas.",
            link:"https://pt.stardewvalleywiki.com/Caroline",
            tags: "esposa cozinheira gentil",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Caroline_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/8/8f/Green_Tea.png','https://stardewvalleywiki.com/mediawiki/images/9/9f/Summer_Spangle.png','https://stardewvalleywiki.com/mediawiki/images/d/d5/Fish_Taco.png']
        },
        {
            titulo: "Jodi",
            descricao: "Jodi é uma aldeã da cidade e a mãe de Sam e Vincent. Ela é conhecida por sua gentileza e por cuidar de todos na vila.",
            link:"https://pt.stardewvalleywiki.com/Jodi",
            tags: "familia gentil mãe",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Jodi_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/5/53/Crispy_Bass.png','https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png','https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png']
        },
        {
            titulo: "Kent",
            descricao: "Kent é um aldeão que mora na Vila Pelicanos. Ele está ausente servindo o exército durante o primeiro ano e retorna para morar na cidade durante a primavera do ano dois. Referências a ele no primeiro ano incluem o conteúdo da gaveta no quarto de Jodi e diálogos de Sam e Vincent.",
            link:"https://pt.stardewvalleywiki.com/Kent",
            tags: "soldado pai ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/1/13/Kent_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/1/18/Roasted_Hazelnuts.png','https://stardewvalleywiki.com/mediawiki/images/2/2d/Fiddlehead_Risotto.png','https://stardewvalleywiki.com/mediawiki/images/2/2d/Fiddlehead_Risotto.png']
        },
        {
            titulo: "Robin",
            descricao: "Robin é a carpinteira local e tem sua própria Carpintaria, na sua casa, aberta das 09:00 às 17:00 todos os dias, exceto terça-feira e parte de sexta-feira (fecha mais cedo).",
            link:"https://pt.stardewvalleywiki.com/Robin",
            tags: "carpinteira ruiva carpintaria ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/f/fa/Robin_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/0/08/Spaghetti.png','https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png','https://stardewvalleywiki.com/mediawiki/images/c/c8/Goat_Cheese.png']
        },
        {
            titulo: "Demetrius",
            descricao: "Demetrius é um cientista que estuda a fauna local do vale. Muitas vezes ele pode ser encontrado trabalhando em seu laboratório ou ao ar livre fazendo anotações.",
            link:"https://pt.stardewvalleywiki.com/Demetrius",
            tags: "cientista carpintaria ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/3/32/Demetrius_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png','https://stardewvalleywiki.com/mediawiki/images/2/24/Bean_Hotpot.png','https://stardewvalleywiki.com/mediawiki/images/e/ec/Rice_Pudding.png']
        },
        {
            titulo: "Lewis",
            descricao: "Lewis é o prefeito da Vila de Pelican, em Stardew Valley. Ele é a figura de autoridade local e, junto com Robin, dá as boas-vindas ao jogador quando este se muda para o vale.",
            link:"https://pt.stardewvalleywiki.com/Lewis",
            tags: "prefeito autoridade ganancioso ",
            imagemUrl: 'https://pt.stardewvalleywiki.com/Ficheiro:Lewis_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/8/8f/Green_Tea.png','https://stardewvalleywiki.com/mediawiki/images/3/30/Glazed_Yams.png','https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png']
        },
        {
            titulo: "Marnie",
            descricao: "Marnie comanda seu próprio negócio no Rancho da Marnie das 09:00 às 16:00 todos os dias, exceto segunda-feira e terça-feira, embora o edifício ainda esteja aberto nestes dias. Ela vende Animais e suprimentos de animais.",
            link:"https://pt.stardewvalleywiki.com/Marnie",
            tags: "rancho Tia_da_Jas ",
            imagemUrl: 'https://pt.stardewvalleywiki.com/Ficheiro:Marnie_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:["https://stardewvalleywiki.com/mediawiki/images/7/79/Farmer's_Lunch.png",'https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png','https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png']
        },
        {
            titulo: "Feiticeiro",
            descricao: "O Feiticeiro, também conhecido como M. Rasmodeu, é um aldeão que mora na Torre do mago no extremo oeste da Floresta Cinzaseiva.",
            link:"https://pt.stardewvalleywiki.com/Feiticeiro",
            tags: "feiticeiro mago magia ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Wizard_Surprised.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png','https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png','https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png']
        },
        {
            titulo: "Clint",
            descricao: "Clint é o ferreiro da cidade, ele costuma não estar trabalhando muito, mas é muito bom em seu trabalho com Geodos",
            link:"https://pt.stardewvalleywiki.com/Clint",
            tags: "ferreiro geodo perdido ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/8/8f/Clint_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png','https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png','https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png']
        },
        {
            titulo: "George",
            descricao: "George é um aldeão que mora na Vila Pelicanos com uma personalidade tanto quanto rabugenta, porém desenvolvendo uma amizade ele se torna mais confortável com a presença do jogador. Ele mora na Estrada do Rio, nº 1 com sua esposa, Evelyn, e seu neto, Alex.",
            link:"https://pt.stardewvalleywiki.com/George",
            tags: "velhor avo rabugento ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/9/90/George_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png','https://stardewvalleywiki.com/mediawiki/images/4/4a/Fried_Mushroom.png','https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png']
        },
        {
            titulo: "Pam",
            descricao: "Pam é uma aldeã que mora no Trailer logo à oeste do rio na Vila Pelicanos. Ela era a motorista do ônibus da Vila Pelicanos antes dele quebrar. Uma vez que o serviço do ônibus seja restabelecido, a Pam administrará a Ponto de Ônibus ao leste da Fazenda nos dias em que não houver chuva.",
            link:"https://pt.stardewvalleywiki.com/Pam",
            tags: "onibus cerveja trailer ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/c/c5/Pam_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/b/b3/Beer.png','https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png','https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png']
        },
        {
            titulo: "Linus",
            descricao: "Linus é um aldeão que mora numa pequena tenda ao norte da Vila Pelicanos perto das Minas.",
            link:"https://pt.stardewvalleywiki.com/Linus",
            tags: "esquisito jesus barraca ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Linus_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/9/9b/Blueberry_Tart.png','https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png','https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png']
        },
        {
            titulo: "Vincent",
            descricao: "Vincent é um aldeão que vive na parte sul da Vila Pelicanos. Ele é um menininho, e muitas vezes pode ser encontrado com sua melhor amiga Jas. Ele admira seu irmão Sam e quer ser igual a ele quando crescer.",
            link:"https://pt.stardewvalleywiki.com/Vincent",
            tags: "menino criança pequeno ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/5/5d/Vincent_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png','https://stardewvalleywiki.com/mediawiki/images/9/9d/Cranberry_Candy.png','https://stardewvalleywiki.com/mediawiki/images/1/1a/Ginger_Ale.png']
        },
        {
            titulo: "Jas",
            descricao: "Jas é uma aldeã que mora fora da Vila Pelicanos, mais precisamente, no Rancho da Marnie. Ela é uma menininha, e muitas vezes pode ser encontrada com seu melhor amigo Vincen",
            link:"https://pt.stardewvalleywiki.com/Jas",
            tags: "menina criança pequena ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/6/6d/Jas_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png','https://stardewvalleywiki.com/mediawiki/images/a/a0/Plum_Pudding.png','https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png']
        },
        {
            titulo: "Evelyn",
            descricao: "Evelyn é uma aldeã que mora na Vila Pelicanos, e é responsável pelas flores da cidade.",
            link:"https://pt.stardewvalleywiki.com/Evelyn",
            tags: "velha gentil flores vaso ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png','https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png','https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png']
        },
        {
            titulo: "Sandy",
            descricao: "Sandy é um aldeão que mora no Deserto de Calico onde ela gerencia a loja Oásis. Os jogadores não irão encontrá-la até que tenham concluído o conjunto do cofre para reparar o ônibus para o deserto.",
            link:"https://pt.stardewvalleywiki.com/Sandy",
            tags: "vendedora deserto carambola cassino ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Sandy_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/6/6e/Mango_Sticky_Rice.png','https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png','https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png']
        },
        {
            titulo: "Krobus",
            descricao: "Krobus é o único monstro amigável que os jogadores vão encontrar. Ele é um Bruto das sombras que vive no esgoto, porque ele é muito sensível à luz do sol para sair durante o dia. Ele vende uma variedade de bens raros. Ele também está disponível como colega de quarto.",
            link:"https://pt.stardewvalleywiki.com/Krobus",
            tags: "monstro amigavel esgoto ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/b/bc/Krobus_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png','https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png','https://stardewvalleywiki.com/mediawiki/images/thumb/1/15/Monster_Compendium.png/36px-Monster_Compendium.png']
        },
        {
            titulo: "Anão",
            descricao: "O Anão é um aldeão da vila que mora nas minas. Inicialmente o caminho é bloqueado por uma rocha inquebrável, logo dentro da entrada. Depois de atualizar para uma picareta de aço, a pedra pode ser quebrada. Uma Bombinha também funciona. ",
            link:"https://pt.stardewvalleywiki.com/Anão",
            tags: "anão vendedor minas ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png','https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png','https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png']
        },
        {
            titulo: "Leo",
            descricao: "Leo é um menino que inicialmente vive na Ilha Gengibre. Seus pais se perderam no mar e ele considera os papagaios que habitam a ilha sua família. Inicialmente, ele é muito tímido para falar com o jogador, até que o jogador faça amizade com os papagaios da ilha, dando-lhes Noz Dourada. Isso é feito dando 10 Nozes Douradas ao primeiro papagaio do lado de fora da tartaruga.",
            link:"https://pt.stardewvalleywiki.com/Leo",
            tags: "garoto papagaios ilha ",
            imagemUrl: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Leo_Happy.png',
            gosto: "Melhores presentes:",
            imagemadicionais:['https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png','https://stardewvalleywiki.com/mediawiki/images/c/c3/Ostrich_Egg.png','https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png']
        },
    ];   
    