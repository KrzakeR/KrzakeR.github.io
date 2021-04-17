let skill_db = {
    speed: [
        { // 0
            icon: 'speedicon.png',
            name: '先行直線◯',
            desc: 'Nieznacznie zwiększa prędkość w linii prostej.',
            type: 'Leader / 先行',
            rarity: 'Normal',
        },
        { // 1
            icon: 'speedicon.png',
            name: 'ペースアップ',
            desc: 'Wyprzedzenie środka nieznacznie cię przyśpieszy',
            type: '',
            rarity: 'Normal',
        },
        { // 2
            icon: 'speedicon.png',
            name: '末脚',
            desc: 'Nieznacznie zwiększa prędkość przy ostatnim sprincie',
            type: '',
            rarity: 'Normal',
        },
        { // 3
            icon: 'speedicon.png',
            name: '尻尾上がり',
            desc: 'Jeżeli aktywujesz kilka umiejętności w środku wyścigu nieznacznie zwiększysz prędkość',
            type: '',
            rarity: 'Normal',
        },
        { // 4
            icon: 'speedicon.png',
            name: '直線巧者',
            desc: 'Nieznacznie zwiększa prędkość w linii prostej.',
            type: '',
            rarity: 'Normal',
        },
        { // 5
            icon: 'speedicon.png',
            name: 'マイル直線◯',
            desc: 'Nieznacznie zwiększa prędkość w linii prostej.',
            type: 'Mile / マイル',
            rarity: 'Normal',
        },
        { // 6
            icon: 'speedicon.png',
            name: '中距離直線◯',
            desc: 'Nieznacznie zwiększa prędkość w linii prostej.',
            type: 'Średni / 中距離',
            rarity: 'Normal',
        },
    ],
    acceleration: [
        { // 0
            icon: 'acceliconrare.webp',
            name: '一陣の風',
            desc: 'Nieznacznie zwiększa przyśpieszenie w linii prostej.',
            type: '',
            rarity: 'Rare',
        },
        { // 1
            icon: 'accelicon.png',
            name: '垂れウマ回避',
            desc: 'Podczas ostatniego sprintu łatwiej się wydostać, gdy ktoś cię zablokuje.',
            type: '',
            rarity: 'Normal',
        },
        { // 2
            icon: 'accelicon.png',
            name: '巧みなステップ',
            desc: 'Uzyskanie lepszej pozycji staje się nieco łatwiejsze.',
            type: 'Leader / 先行',
            rarity: 'Normal',
        },
        { // 3
            icon: 'accelicon.png',
            name: '直線加速',
            desc: 'Nieznacznie zwiększa przyśpieszenei w linii prostej.',
            type: '',
            rarity: 'Normal',
        },
        { // 4
            icon: 'accelicon.png',
            name: '差し切り体勢',
            desc: 'Nieznacznie zwiększa przyśpieszenie podczas ostatniego sprintu.',
            type: 'Betweener / 差し',
            rarity: 'Normal',
        },
        { // 5
            icon: 'accelicon.png',
            name: '上昇気流',
            desc: 'Nieznacznie zwiększa przyśpieszenie jeżeli pod koniec wyścigu będziesz blokowany.',
            type: '',
            rarity: 'Normal',
        },
    ],
    position: [
        { // 0
            icon: 'positionicon.png',
            name: 'ポジションセンス',
            desc: 'Lepsze pozycjonowanie na początku wyścigu.',
            type: '',
            rarity: 'Normal',
        },
        { // 1
            icon: 'positionicon.png',
            name: '臨機応変',
            desc: 'Lepsze pozycjonowanie na końcu wyścigu.',
            type: '',
            rarity: 'Normal',
        },
        { // 2
            icon: 'positionicon.png',
            name: 'イナズマステップ',
            desc: 'Trudniej cię otoczyć.',
            type: 'Średni / 中距離',
            rarity: 'Normal',
        },
    ],
    recovery:[
        { // 0
            icon: 'recoveryicon.png',
            name: '軽やかステップ',
            desc: 'Trudniej ci się zmęczyć.',
            type: 'Średni / 中距離',
            rarity: 'Normal',
        },
        { // 1
            icon: 'recoveryicon.png',
            name: '深呼吸',
            desc: 'Odzyskujesz nieco wytrzymałości biegnąc w linii prostej.',
            type: 'Długi / 長距離',
            rarity: 'Normal',
        },
        { // 2
            icon: 'recoveryiconrare.png',
            name: '円弧のマエストロ',
            desc: 'Odzyskujesz wytrzymałość podczas zakrętów.',
            type: '',
            rarity: 'Rare',
        },
        { // 3
            icon: 'recoveryicon.png',
            name: 'コーナー回復◯',
            desc: 'Przywraca nieco wytrzymałość podczas zakrętów.',
            type: '',
            rarity: 'Normal',
        },
        { // 4
            icon: 'recoveryicon.png',
            name: '展開窺い',
            desc: 'Biegnąc za kimś na początku wyścigu zregenerujesz nieco wytrzymałości.',
            type: 'Mile / マイル',
            rarity: 'Normal',
        },
        { // 5
            icon: 'recoveryiconrare.png',
            name: '好転一息',
            desc: 'Odzyskujesz wytrzymałość w linii prostej.',
            type: '',
            rarity: 'Rare',
        },
        { // 6
            icon: 'recoveryiconrare.png',
            name: '直線回復',
            desc: 'Przywraca nieco wytrzymałości w linii prostej.',
            type: '',
            rarity: 'Rare',
        },
    ],
    preference:[
        { // 0
            icon: 'pref1icon.png',
            name: '良バ場◯',
            desc: 'Lepiej sobie radzisz gdy masz dobry humor.',
            type: '',
            rarity: 'Normal',
        },
        { // 1
            icon: 'pref3icon.png',
            name: '東京レース場◯',
            desc: 'Lepiej sobie radzisz na torze w Tokyo.',
            type: '',
            rarity: 'Normal',
        },
    ],
    debuff:[
        { // 0
            icon: 'stressdebufficon.png',
            name: '先行ためらい',
            desc: 'Spowalniasz nieznacznie innych pod koniec wyścigu.',
            type: '',
            rarity: 'Normal',
        },
    ],
    start:[
        { // 0
            icon: 'starticonrare.png',
            name: 'コンセントレーション',
            desc: 'Lepszy start pozwala łatwiej obrać lepszą pozycje.',
            type: '',
            rarity: 'Rare',
        },
        { // 1
            icon: 'starticon.png',
            name: '集中力',
            desc: 'Lepszy start pozwala łatwiej obrać lepszą pozycje.',
            type: '',
            rarity: 'Normal',
        },
    ]
}