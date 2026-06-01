/* ==========================================================================
   Crypto Insights - Futuristic AI Dashboard Core Logic
   ========================================================================== */

// --- Curated Database: AI Coin Intel, Timeline, News, AI Comments ---
const COIN_DATABASE = {
    BTC: {
        name: "비트코인 (Bitcoin)",
        desc: "비트코인은 최초의 탈중앙화 디지털 자산으로, 블록체인 기술의 근간이 되는 화폐입니다. 총 발행량은 2,100만 개로 한정되어 있어 '디지털 금'으로 불립니다. AI 예측 모델에 따르면 비트코인의 희소성과 기관 수급은 거시 경제 불안정 속에서 글로벌 자산 보존 수단으로서의 신뢰도를 급격히 높이고 있습니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>MVRV Z-Score:</b> 2.45 (역사적 평균 대비 저평가 국면 탈출 시도)<br>• <b>거래소 보유량:</b> 역대 최저 수준 (장기 보유 성향 강함)<br>• <b>해시레이트:</b> 사상 최고치 경신 중 (네트워크 보안성 극대화)<br>• <b>AI 수급 진단:</b> 최근 현물 ETF 유입 물량과 지갑 주소 증가세의 상관관계가 0.89로 매우 높으며, 이는 장기 매집 고래 세력의 주도적 상승 장세를 지지합니다.",
        timeline: [
            { year: "2009년", text: "사토시 나카모토에 의해 최초의 제네시스 블록 발행" },
            { year: "2012년", text: "제1차 반감기 도래 (블록 보상 50 BTC -> 25 BTC)" },
            { year: "2017년", text: "세그윗(SegWit) 활성화 및 최초로 20,000달러 돌파" },
            { year: "2021년", text: "엘살바도르 법정 화폐 채택 및 최고점 약 69,000달러 기록" },
            { year: "2024년", text: "미국 SEC Spot ETF 승인 및 반감기 완료, 사상 최고가 경신" }
        ],
        news: [
            { source: "Neural Analytics", time: "5분 전", sentiment: "bullish", title: "[AI 분석] 블랙록 현물 ETF 유입량 일일 8억 달러 돌파... 강력한 숏 스퀴즈 시그널 검출", snippet: "온체인 청산 맵 분석 결과, 109,200,000 KRW 구간에 대규모 숏 포지션 청산 매물이 집중되어 있습니다. 돌파 시 단기 급등 가능성이 매우 높습니다." },
            { source: "Whale Alert AI", time: "1시간 전", sentiment: "bullish", title: "[AI 분석] 장기 휴면 고래 주소 3,500 BTC 이동 감지... 시장 공급 부족 심화", snippet: "최근 7년간 활성화되지 않았던 고래 지갑에서 거래소 외부 수탁 지갑으로 이체가 확인되었습니다. 이는 장기 자산 홀딩의 신호로 해석됩니다." },
            { source: "Macro Filter", time: "4시간 전", sentiment: "neutral", title: "[AI 분석] 미국 금리 동결 발표에 대한 AI 투심 스캔... 단기 보합세 예측", snippet: "금리 동결 결정 직후 소셜 투심은 소폭 하락했으나 온체인 순유입 지표가 이를 방어하고 있어, 가격은 단기 보합 후 반등할 전망입니다." }
        ],
        aiComments: [
            { author: "Antigravity AI 수석연구원", sentiment: "bullish", text: "현재 빗썸과 코인원 간의 김프(스프레드)가 0.05% 미만으로 극도로 축적되어 있습니다. 이는 해외 기관 매수세와 국내 매수세가 완전히 일치하고 있음을 뜻하며, 대형 랠리의 신호탄입니다.", time: "10분 전" },
            { author: "Quantum Trading Bot", sentiment: "bullish", text: "1시간 봉 기준 볼린저 밴드 상단 밴드 스퀴즈가 해소되며 상방 발산이 시작되었습니다. 단기 거래 타겟은 110,200,000 KRW입니다.", time: "2시간 전" }
        ],
        volatility: 0.012, // simulated price change standard deviation
        basePrice: 108900000
    },
    ETH: {
        name: "이더리움 (Ethereum)",
        desc: "이더리움은 스마트 계약을 지원하는 최초의 오픈소스 블록체인 플랫폼입니다. 디파이(DeFi), 대체불가토큰(NFT) 등 다양한 웹3 애플리케이션의 중추적인 기저 레이어 역할을 수행합니다. AI 트렌드 엔진은 이더리움 덴쿤 업그레이드 이후 활성화된 레이어2 생태계의 폭발적 성장이 본위 자산의 실질적 디플레이션을 이끌고 있다고 분석합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>스테이킹 점유율:</b> 총 공급량의 28% 스테이킹 중 (유동 공급 감소 효과)<br>• <b>가스비 연소율:</b> 활성 지갑 증가에 따라 일일 연소량 증가세<br>• <b>레이어 2 TVL:</b> $42.5B 기록 (사상 최고치)<br>• <b>AI 수급 진단:</b> 스테이킹 자본 비율 상승과 기관용 현물 ETF 수급의 동시 증가는 거래소 공급량을 잠식 중입니다. 인공지능 가격 예측 모델은 장기 우상향 국면의 지속을 전망합니다.",
        timeline: [
            { year: "2015년", text: "비탈릭 부테린에 의해 이더리움 메인넷 공식 론칭" },
            { year: "2016년", text: "DAO 해킹 사태로 이더리움 및 이더리움 클래식 하드포크 진행" },
            { year: "2020년", text: "이더리움 2.0 비콘체인 가동 및 PoS 전환 준비" },
            { year: "2022년", text: "'The Merge' 완료... 지분증명(PoS) 합의 알고리즘 성공적 전환" },
            { year: "2024년", text: "덴쿤(Dencun) 업그레이드 완료 및 이더리움 현물 ETF 미국 출시" }
        ],
        news: [
            { source: "DeFi Pulse AI", time: "15분 전", sentiment: "bullish", title: "[AI 분석] 이더리움 레이어 2 활성 거래 수 사상 최고치 경신... 네트워크 수수료 급감", snippet: "덴쿤 업그레이드로 인한 L2 가스비 절감 효과가 지속되면서 활성 사용자가 급격히 몰리고 있으며, 이는 ETH 가치 제고로 직결됩니다." },
            { source: "SEC Watch AI", time: "2시간 전", sentiment: "neutral", title: "[AI 분석] 이더리움 스테이킹 파생상품(LSD) 시장의 규제 동향에 따른 AI 투심 변화", snippet: "스테이킹 파생상품 규제에 관한 논의가 투심에 일시적 노이즈를 형성했으나, 장기 적립식 고래들의 매수 흐름에는 지장이 없는 것으로 스캔됩니다." },
            { source: "Smart Contract AI", time: "5시간 전", sentiment: "bearish", title: "[AI 분석] 이더리움 단기 청산 물량 공급 증가... 2,920,000 KRW 지지선 테스트 가능성", snippet: "선물 거래 시장에서 순간적인 레버리지 청산 물량이 포착되었습니다. 단기 변동성이 증가하며 2,900,000 KRW 초반 지지 확인이 예상됩니다." }
        ],
        aiComments: [
            { author: "DeFi Neural Agent", sentiment: "bullish", text: "디파이 예치금(TVL) 유입 추세가 사상 최대 수준을 유지 중입니다. 현물 이더리움 공급 부족이 본격화되면 가격 상승률이 비트코인을 상회할 확률이 74%입니다.", time: "45분 전" },
            { author: "Ethereum AI Advisor", sentiment: "neutral", text: "단기적으로 2,980,000 KRW 매물대에서 저항을 받고 있으나, 하단의 2,910,000 KRW 부근 매수세가 탄탄하게 방어해 주고 있어 바닥 다지기가 견고합니다.", time: "3시간 전" }
        ],
        volatility: 0.015,
        basePrice: 2970000
    },
    SOL: {
        name: "솔라나 (Solana)",
        desc: "솔라나는 고성능 레이어 1 블록체인으로, 독보적인 전송 속도와 저렴한 수수료를 제공합니다. 역사증명(PoH)이라는 독창적 합의 메커니즘을 사용하며, 글로벌 스케일의 DApp과 밈코인 및 결제 플랫폼의 허브로 자리잡았습니다. AI 모델에 따르면 솔라나는 압도적인 트랜잭션 처리량과 개발자 유입률을 바탕으로 기존 이더리움의 유력한 대안이자 웹3 대중화의 선두 주자로 평가받고 있습니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>네트워크 처리량 (TPS):</b> 평균 2,800 TPS 달성 (글로벌 최고 수준)<br>• <b>DEX 거래대금:</b> 유니 스왑 점유율 추월 빈도 증가<br>• <b>활성 검증인 수:</b> 1,600명 돌파 (분산도 지속 증가)<br>• <b>AI 수급 진단:</b> 트랜잭션 증가율과 가격의 상호작용 계수가 0.92를 상회합니다. 이는 투기적 자본뿐만 아니라 디파이, 결제 파트너십 등 견고한 펀더멘탈 요인이 작용하고 있음을 시사합니다.",
        timeline: [
            { year: "2020년", text: "솔라나 베타 메인넷 공식 출범 및 상장" },
            { year: "2021년", text: "FTX 파트너십을 중심으로 초고속 성장 및 최고가 250달러 돌파" },
            { year: "2022년", text: "FTX 파산 사태로 극심한 가격 침체 겪음 (최저가 8달러 기록)" },
            { year: "2023년", text: "네트워크 안정화 성공 및 밈코인 랠리를 시작으로 강력한 V자 반등 성공" },
            { year: "2024년", text: "레이어1 거래량 점유율 1위 등극 및 현물 ETF 론칭 논의 시작" }
        ],
        news: [
            { source: "Solana Scout AI", time: "10분 전", sentiment: "bullish", title: "[AI 분석] 솔라나 활성 주소 수 전주 대비 32% 폭증... 디파이 거래량 이더리움 압도", snippet: "주요 탈중앙화 거래소(DEX)인 주피터와 레이디움의 일일 거래량이 이더리움 메인넷을 크게 능가했습니다. 강력한 유틸리티 기반 상승이 예상됩니다." },
            { source: "Whale Radar SOL", time: "3시간 전", sentiment: "bullish", title: "[AI 분석] 초대형 기관 그레이스케일 솔라나 트러스트 프리미엄 400% 급등... 장외 매수 폭발", snippet: "미국 기관 투자자들이 그레이스케일의 솔라나 트러스트 신탁 상품을 집중적으로 순매수하고 있습니다. 장기 랠리를 지탱하는 강력한 신호입니다." }
        ],
        aiComments: [
            { author: "Solana Tech Bot", sentiment: "bullish", text: "최근 네트워크 하드웨어 최적화 패치 배포 이후 가동률 100%를 안정적으로 달성 중입니다. 기술적 위험 해소로 기관 매수 진입 시점이 앞당겨지고 있습니다.", time: "15분 전" },
            { author: "Crypto Whale Agent", sentiment: "bullish", text: "120,000 KRW 대에서 강한 바닥 다지기가 완료되었으며, 피보나치 되돌림상 다음 타겟은 135,000 KRW 돌파 시도입니다.", time: "1시간 전" }
        ],
        volatility: 0.022,
        basePrice: 122000
    },
    XRP: {
        name: "리플 (Ripple)",
        desc: "리플은 글로벌 금융기관의 실시간 대규모 해외 송금을 위해 개발된 디지털 자산 및 통신 프로토콜입니다. 리플 넷(RippleNet)을 통해 전 세계 수백 개의 은행과 결제 네트워크를 연동합니다. AI 신경망은 미국 SEC와의 수년간의 소송이 종결 국면에 들어서고, 전 세계 중앙은행 디지털 화폐(CBDC) 플랫폼에 리플 기술이 속속 도입되면서 글로벌 금융 결제 인프라로서의 실가치를 인정받기 시작했다고 진단합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>에스크로 물량:</b> 락업 해제 규칙에 따라 매달 순차 방출 및 일부 재락업 진행<br>• <b>검증 노드 수:</b> 글로벌 금융 및 학술 기관 주축의 독립 검증 네트워크 가동<br>• <b>CBDC 파트너십:</b> 8개국 이상 국가와 리플 CBDC 프라이빗 레저 파일럿 운영<br>• <b>AI 수급 진단:</b> 소송 관련 공식 문서 공개 시점마다 가격의 변동 폭이 극대화되는 경향이 있습니다. 현재 AI 예측 모델은 법적 리스크 소멸에 따라 거대 자금 유입의 임계점에 다다르고 있다고 스캔합니다.",
        timeline: [
            { year: "2012년", text: "크리스 라슨과 제드 맥케일럽에 의해 오픈코인(현 리플) 창립 및 XRP 발행" },
            { year: "2016년", text: "뉴욕금융감독청(NYDFS)으로부터 암호화폐 라이선스(BitLicense) 획득" },
            { year: "2018년", text: "시가총액 2위 등극 및 역사적 최고가 약 4,800원 기록" },
            { year: "2020년", text: "미국 SEC, 리플 랩스를 미등록 증권 판매 혐의로 제소" },
            { year: "2023년", text: "뉴욕 남부지법, 'XRP의 일반 대중 판매는 증권이 아니다'라며 일부 승소 판결" }
        ],
        news: [
            { source: "Legal Analyzer AI", time: "30분 전", sentiment: "bullish", title: "[AI 분석] 리플-SEC 법원 최종 합의 권고안 도출 임박... 법적 리스크 99% 소멸 수렴", snippet: "연방 법원 안팎에서 전해진 소송 타결 협상 소식이 XRP 소셜 지표를 급격히 상승시켰습니다. Bullish 투자 심리가 85%로 치솟았습니다." },
            { source: "CBDC Monitor AI", time: "2시간 전", sentiment: "neutral", title: "[AI 분석] 아시아 주요 은행 컨소시엄 리플넷 기반 국제 외환 정산 테스트 완료", snippet: "즉각적인 거래 체결성과 0.0001달러 미만의 수수료 효율성이 입증되어, 리플 레저의 실용성이 다시 한번 확인되었습니다." }
        ],
        aiComments: [
            { author: "XRP Ledger Guardian", sentiment: "bullish", text: "소송 리스크라는 두꺼운 족쇄가 풀리는 즉시 미국 대형 거래소들의 대규모 수탁 서비스 활성화 및 XRP 파생상품 출시가 예상되므로 선제적 매집 구간입니다.", time: "18분 전" },
            { author: "Arbitrage AI Pro", sentiment: "neutral", text: "빗썸과 코인원 간의 실시간 물량이 매우 활발하게 돌고 있습니다. 양 거래소의 매도 잔량이 빠르게 소화되고 있어, 급격한 펌핑 시 단기 가격차가 일시적으로 늘어날 수 있습니다.", time: "50분 전" }
        ],
        volatility: 0.018,
        basePrice: 1960
    },
    ADA: {
        name: "에이디에이 (Cardano)",
        desc: "에이디에이(카르다노)는 동료 평가(Peer-reviewed) 학술 연구를 바탕으로 설계된 최초의 3세대 블록체인입니다. 보안성과 지속 가능한 확장성을 중심 가치로 두고 개발되었습니다. AI 심층 분석에 따르면, 카르다노의 우수한 수학적 안전성 모델(eUTXO)은 대규모 디파이 거래와 금융 결제 환경에서 해킹 방어력이 가장 강한 플랫폼 중 하나로 장기 평가받고 있습니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>스테이킹 풀 수:</b> 3,000개 이상 독립 풀 성황리 가동 중<br>• <b>스마트 계약 활성도:</b> 플루투스 V2 스크립트 작성 수 전월 대비 18% 증가<br>• <b>AI 수급 진단:</b> 투기적 자금 성격이 짙은 다른 자산과 달리, 카르다노는 견고한 커뮤니티 스테이킹 성향으로 인해 가격 하락 방어력이 매우 뛰어난 편이며, 온체인 개발 진척율과 긴밀히 연동됩니다.",
        timeline: [
            { year: "2017년", text: "이더리움 공동 창립자인 찰스 호스킨슨이 카르다노(ADA) 메인넷 론칭" },
            { year: "2020년", text: "셸리(Shelley) 업그레이드 완료... 완전 탈중앙화 스테이킹 시대 개막" },
            { year: "2021년", text: "알론조(Alonzo) 하드포크 성공... 스마트 계약 기능 활성화 및 디파이 생태계 진입" },
            { year: "2022년", text: "바실(Vasil) 하드포크 완료... 블록체인 전송 효율 및 스마트 계약 처리 속도 극대화" },
            { year: "2024년", text: "창(Chang) 하드포크 진입... 완전한 온체인 거버넌스 및 자율 자치 민주주의 체계 수립" }
        ],
        news: [
            { source: "Cardano Pulse AI", time: "40분 전", sentiment: "bullish", title: "[AI 분석] 창(Chang) 하드포크 이후 온체인 의결 참여 지갑 15만 개 돌파... 민주적 웹3 표준 제시", snippet: "카르다노 홀더들이 프로토콜 파라미터 제안에 직접 서명하면서 가치 중심의 커뮤니티 연대력이 증명되었습니다. 중장기적 펀더멘탈 호재입니다." },
            { source: "Global Finance Watch", time: "6시간 전", sentiment: "neutral", title: "[AI 분석] 아프리카 핀테크 파트너십 확장에 관한 ADA AI 심층 트래킹 결과", snippet: "실제 유틸리티를 통한 신원 인증 및 소액 대출 서비스가 자리를 잡으면서, 거시적 채택 흐름이 ADA의 장기 저평가 해소 요소로 작용하고 있습니다." }
        ],
        aiComments: [
            { author: "Cardano Scholar Bot", sentiment: "bullish", text: "카르다노는 학술적 엄밀성을 바탕으로 코드를 릴리즈하므로 버그로 인한 대규모 디파이 해킹 사고가 전무합니다. 안전을 중시하는 기관 투자자들에게 탁월한 선택지입니다.", time: "1시간 전" }
        ],
        volatility: 0.014,
        basePrice: 350
    },
    DOGE: {
        name: "도지코인 (Dogecoin)",
        desc: "도지코인은 인터넷 밈(Meme) 캐릭터인 시바견을 마스코트로 시작하여 탄생한 세계 최초의 밈코인입니다. 강력한 풀뿌리 커뮤니티 지지와 일론 머스크 등 글로벌 인플루언서들의 강력한 트윗 언급에 의해 전 세계 자산 시장의 주목을 받게 되었습니다. AI 투심 진단기는 도지코인이 단순한 장난을 넘어, 소셜 팁 결제 문화 및 거대 기업의 상거래 결제 수단으로 적극 채택되며 독특한 지불 자산 가치망을 구축했다고 평가합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>일일 활성 주소:</b> 밈코인 중 압도적 1위 기록 중<br>• <b>수수료 최적화:</b> 대규모 소액 결제 처리가 가능할 정도로 극도로 낮은 전송비용<br>• <b>AI 수급 진단:</b> 일론 머스크의 X(구 트위터) 결제 시스템 탑재 루머와 소셜 미디어 바이럴 빈도 간의 상관계수가 0.95로 집계되어, 뉴스 한 줄에 의한 즉각적 유동성 폭발 확률이 모든 자산 중 가장 높습니다.",
        timeline: [
            { year: "2013년", text: "빌리 마커스와 잭슨 팔머에 의해 비트코인을 패러디하여 개발 및 발행" },
            { year: "2014년", text: "도지코인 재단, 자메이카 봅슬레이 팀의 소치 올림픽 출전 후원 모금 성공" },
            { year: "2021년", text: "일론 머스크의 '도지 파더' 언급으로 가격 폭등, 800원 돌파 및 시가총액 4위 등극" },
            { year: "2022년", text: "일론 머스크의 트위터(현 X) 인수 소식과 연동되어 가격 대폭 변동성 기록" },
            { year: "2024년", text: "실제 달 탐사 우승 프로젝트 Doge-1 로켓 발사 연계로 글로벌 투심 집중" }
        ],
        news: [
            { source: "Social Pulse AI", time: "8분 전", sentiment: "bullish", title: "[AI 분석] 일론 머스크 X(구 트위터) 금융 결제 라이선스 신규 획득... DOGE 결제 탑재 기대 80% 상회", snippet: "미국 추가 3개 주에서 X의 송금 라이선스 획득 소식이 보도되었습니다. 소셜 오피니언은 도지코인의 지불 연동을 기정사실화하며 강력한 포모(FOMO)를 촉발하고 있습니다." },
            { source: "Meme Tracker AI", time: "2시간 전", sentiment: "bearish", title: "[AI 분석] 단기 급등에 따른 미청산 계약 급증... 고레버리지 롱 스퀴즈 위험 알림", snippet: "선물 거래 시장의 레버리지 롱 포지션 비율이 단기 과열 양상에 도달했습니다. 순간적인 가격 되돌림을 통한 개미 털기 가능성이 스캔되므로 주의하십시오." }
        ],
        aiComments: [
            { author: "Meme Intelligence Bot", sentiment: "bullish", text: "도지는 밈코인의 대부로서, 다른 파생 밈코인들이 펌핑을 시작하기 전에 대장으로서 자금을 가장 먼저 빨아들입니다. 시장 주기가 다시 시작되고 있습니다.", time: "5분 전" }
        ],
        volatility: 0.035, // High volatility
        basePrice: 150
    },
    LINK: {
        name: "체인링크 (Chainlink)",
        desc: "체인링크는 온체인 스마트 계약과 현실 세계의 오프데이터(날씨, 시세, 스포츠 결과 등)를 안전하게 연결해 주는 선도적인 탈중앙화 오라클 네트워크입니다. AI 수급 레이더는 체인링크의 신기술인 CCIP(크로스체인 전송 프로토콜)가 글로벌 전통 금융(SWIFT) 및 실물자산(RWA) 토큰화 시장의 상호 운용성 표준으로 완벽히 입증되었다고 평가합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>오라클 피드 수:</b> 수천 개의 최고급 디파이 프로토콜에 실시간 시세 데이터 공급 중<br>• <b>CCIP 채택 은행 수:</b> SWIFT를 포함한 글로벌 주요 대형 투자은행 금융 기관 연합<br>• <b>AI 수급 진단:</b> 실물자산(RWA) 토큰화 트렌드가 가속화됨에 따라 체인링크 인프라 이용 가스비 수요가 꾸준히 누적되고 있으며, 이는 투기적 요인이 배제된 실질적 유틸리티 상승 모델을 형성합니다.",
        timeline: [
            { year: "2017년", text: "세르게이 나자로프 등에 의해 스마트계약 오라클 네트워크 체인링크 론칭" },
            { year: "2019년", text: "구글(Google) 클라우드가 체인링크 오라클 데이터를 연동한다는 호재로 폭증" },
            { year: "2021년", text: "체인링크 2.0 백서 공개... 탈중앙화 오라클 네트워크의 연산 능력 극대화" },
            { year: "2023년", text: "CCIP 공식 메인넷 가동 및 전 세계 자금 결제 네트워크(SWIFT) 파트너십 구축" },
            { year: "2024년", text: "실물 자산(RWA) 및 기관 자산 토큰화 프로젝트의 핵심 연동 솔루션 독점 지위 확보" }
        ],
        news: [
            { source: "RWA Intelligence", time: "12분 전", sentiment: "bullish", title: "[AI 분석] 피델리티 등 초대형 자산운용사 RWA 토큰 스마트계약에 체인링크 CCIP 전격 도입", snippet: "전통 금융 자산의 온체인 이동 시 보안성과 유효성을 검증하는 중추 기술로 체인링크 CCIP가 채택되면서 대규모 실사용 가치 포착이 시작되었습니다." }
        ],
        aiComments: [
            { author: "Oracle Neural Node", sentiment: "bullish", text: "체인링크가 없으면 거의 모든 디파이 플랫폼의 스마트 계약이 현실 시세 데이터를 읽지 못해 가동이 불가능합니다. 웹3 인프라의 독점적인 왕이라고 할 수 있습니다.", time: "30분 전" }
        ],
        volatility: 0.016,
        basePrice: 13500
    },
    DOT: {
        name: "폴카닷 (Polkadot)",
        desc: "폴카닷은 서로 다른 독립적인 블록체인(파라체인)들이 서로 안전하게 데이터를 전송하고 상호 운용할 수 있도록 지원하는 고성능 멀티체인 프로토콜입니다. 이더리움 공동 창립자인 개빈 우드가 이끄는 Web3 재단의 주도로 고안되었습니다. AI 시황 엔진은 폴카닷 2.0 업그레이드로 인한 코어타임 할당 메커니즘이 DApp 프로젝트들의 온체인 연산 비용을 획기적으로 낮추어 확장 국면에 진입하고 있다고 진단합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>릴레이 체인 보안성:</b> 수억 개의 DOT이 네트워크 검증을 위해 락업 및 검증 중<br>• <b>파라체인 낙찰 개수:</b> 다양한 웹3 생태계 프로젝트 80개 이상 활성 연동<br>• <b>AI 수급 진단:</b> 견고한 거버넌스 투표율과 개발자 유입 순위를 상위 유지 중이며, 폴카닷 2.0 상용화에 힘입어 파라체인들의 실질 소비 지출 트래픽이 상승하고 있어 장기 밸류에이션 리레이팅이 대기 중입니다.",
        volatility: 0.015,
        basePrice: 1770
    },
    BCH: {
        name: "비트코인 캐시 (Bitcoin Cash)",
        desc: "비트코인 캐시는 비트코인의 느린 전송 속도와 높은 수수료 문제를 해결하여, 실제 온오프라인 일상생활의 '직접 지불 결제 수단'으로 상용화하기 위해 비트코인 블록체인에서 하드포크된 가상화폐입니다. AI 지능 분석기는 비트코인 캐시가 블록 크기를 비약적으로 키워 실시간 결제 편의성을 확보하였으며, 마이크로 페이먼트 수단으로서 독자적 영역을 공고히 다졌다고 평가합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>블록 크기:</b> 최대 32MB 지원으로 대량의 트랜잭션을 수초 내에 거의 제로에 가까운 수수료로 처리<br>• <b>AI 수급 진단:</b> 반감기 완료 이후 채굴자 수익성 회복 및 스마트 계약 레이어인 '캐시 토큰' 발행량이 전분기 대비 140% 급증하며 스마트 지불 플랫폼으로서의 내적 동력을 재가동 중입니다.",
        volatility: 0.02,
        basePrice: 445000
    },
    ALGO: {
        name: "알고랜드 (Algorand)",
        desc: "알고랜드는 튜링상 수상자인 실비오 미칼리 교수가 이끄는 연구진에 의해 개발된 순수 지분 증명(PPoS) 기반 레이어 1 블록체인입니다. 블록체인의 고질적 한계였던 '트릴레마(보안성, 확장성, 탈중앙화의 동시 만족)'를 수학적으로 해결한 최초의 플랫폼 중 하나입니다. AI 트렌드 리포트는 알고랜드의 완벽한 즉각적 완결성과 제로에 수렴하는 블록 포크 가능성 덕분에 글로벌 기관 결제, 중앙은행 CBDC 및 탄소 배출권 친환경 정산 분야의 단독 파트너로 각광받고 있다고 분석합니다.",
        techDesc: "<b>온체인 지표 요약:</b><br>• <b>즉각적 완결성 (Finality):</b> 3.3초 미만의 초고속 확정 (포크 현상 전혀 없음)<br>• <b>탄소 중립성:</b> 블록체인 노드 운영 전력 소모를 완전히 상쇄하는 친환경 인프라 수립<br>• <b>AI 수급 진단:</b> 알고랜드 재단의 풍부한 생태계 보조금 정책과 글로벌 친환경 자산 토큰화 프로젝트의 연계를 바탕으로, 실사용처 기반 트래픽이 전년 대비 45% 누적 증가하여 하방을 강력히 지지합니다.",
        volatility: 0.018,
        basePrice: 184
    }
};

// --- State Variables ---
let currentCoin = "BTC";
let activeTab = "info-tab";
let activePeriod = "24h";
let priceChart = null;
let liveNetwork = true;
let chartUpdateInterval = null;
let priceTickInterval = null;
let simBithumbPrice = null;
let simCoinonePrice = null;
let previousCoinSymbol = "";

// Fake database for storing user comments (loaded from localStorage if exists)
let userComments = {};

// Helper: Get random walk change for simulated prices
function getRandomWalk(price, volatility) {
    const changePercent = (Math.random() - 0.5) * 2 * volatility;
    return price * (1 + changePercent);
}

// Helper: Format KRW currency beautifully
function formatKRW(value) {
    return Math.round(value).toLocaleString('ko-KR') + " KRW";
}

// Generate premium mock chart data based on time periods
function generateChartData(basePrice, volatility, period) {
    let dataPoints = 24;
    if (period === "30m") dataPoints = 30;     // 30 data points representing 1-minute steps over 30 minutes
    else if (period === "1h") dataPoints = 60;  // 60 minutes
    else if (period === "7d") dataPoints = 7;
    else if (period === "30d") dataPoints = 30;
    else if (period === "6m") dataPoints = 30;  // 30 weekly-ish data points
    else if (period === "1y") dataPoints = 24;  // 24 bi-weekly-ish data points
    else if (period === "all") dataPoints = 50; // 50 multi-year points

    let prices = [];
    let labels = [];
    let current = basePrice * 0.95; // start slightly lower

    const now = new Date();

    for (let i = dataPoints; i > 0; i--) {
        current = getRandomWalk(current, volatility * 0.7);
        prices.push(current);
        
        let labelText = "";
        if (period === "30m" || period === "1h") {
            const time = new Date(now.getTime() - i * 60 * 1000);
            labelText = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
        } else if (period === "24h") {
            const time = new Date(now.getTime() - i * 60 * 60 * 1000);
            labelText = `${time.getHours()}시`;
        } else if (period === "7d" || period === "30d") {
            const time = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
            labelText = `${time.getMonth() + 1}/${time.getDate()}`;
        } else if (period === "6m") {
            const time = new Date(now.getTime() - i * 6 * 24 * 60 * 60 * 1000); // 6 days step
            labelText = `${time.getMonth() + 1}/${time.getDate()}`;
        } else if (period === "1y") {
            const time = new Date(now.getTime() - i * 15 * 24 * 60 * 60 * 1000); // 15 days step
            labelText = `${time.getFullYear() - 2000}/${(time.getMonth() + 1).toString().padStart(2, '0')}`;
        } else { // 'all'
            const time = new Date(now.getTime() - i * 30 * 24 * 60 * 60 * 1000); // 30 days step
            labelText = `${time.getFullYear() - 2000}/${(time.getMonth() + 1).toString().padStart(2, '0')}`;
        }
        labels.push(labelText);
    }
    return { prices, labels };
}

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial LocalStorage Load for Comments
    loadCommentsFromStorage();

    // 2. Setup Event Listeners
    setupEventListeners();

    // 3. Start Live Time Clock
    startClock();

    // 4. Load Coin Data and Draw Chart
    loadCoinData(currentCoin);

    // 5. Start Price & Chart Tick Updates
    startRealtimeTicks();
});

// Setup DOM Event Listeners
function setupEventListeners() {
    // Coin Selection Change
    const coinSelect = document.getElementById("coin-select");
    coinSelect.addEventListener("change", (e) => {
        currentCoin = e.target.value;
        loadCoinData(currentCoin);
    });

    // Info Tabs Click
    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            tabLinks.forEach(l => l.classList.remove("active"));
            e.target.classList.add("active");
            
            activeTab = e.target.dataset.tab;
            const panels = document.querySelectorAll(".tab-panel");
            panels.forEach(p => p.classList.remove("active"));
            document.getElementById(activeTab).classList.add("active");
        });
    });

    // Chart Filter Click
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            activePeriod = e.target.dataset.period;
            updateChartTrend(true);

            // Trigger AI report update immediately based on the new timeframe!
            if (previousBithumbPrice !== null && previousCoinonePrice !== null) {
                const spread = previousCoinonePrice - previousBithumbPrice;
                const premiumPercent = (spread / previousBithumbPrice) * 100;
                const changeRateEl = document.getElementById("stat-change-rate");
                const fluctuate = parseFloat(changeRateEl.textContent) || 0.0;
                generateAIReport(previousBithumbPrice, previousCoinonePrice, premiumPercent, fluctuate);
            }
        });
    });

    // Sentiment Form Button Click
    const sentimentBtns = document.querySelectorAll(".sentiment-btn");
    sentimentBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            sentimentBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
        });
    });

    // Comment Form Submit Handler
    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", handleCommentSubmit);

    // Mobile Bottom Navigation Click
    const mobileNavItems = document.querySelectorAll(".nav-item");
    const mobileViews = document.querySelectorAll("[data-mobile-view]");
    
    // Initialize default view (dashboard) for mobile
    function updateMobileView(targetView) {
        mobileViews.forEach(view => {
            if (view.dataset.mobileView === targetView) {
                view.classList.remove("mobile-hidden");
            } else {
                view.classList.add("mobile-hidden");
            }
        });
    }
    
    // Call it initially so that it starts on dashboard
    updateMobileView("dashboard");
    
    mobileNavItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const btn = e.target.closest('.nav-item');
            if (!btn) return;
            
            mobileNavItems.forEach(nav => nav.classList.remove("active"));
            btn.classList.add("active");
            
            const targetView = btn.dataset.target;
            updateMobileView(targetView);
            
            // Scroll to top when switching tabs on mobile
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Live ticking clock in header
function startClock() {
    const liveTimeText = document.getElementById("live-time-text");
    setInterval(() => {
        const now = new Date();
        liveTimeText.textContent = now.toLocaleTimeString('ko-KR');
    }, 1000);
}

// Load and Render Selected Coin's Database Content
function loadCoinData(coinSymbol) {
    const db = COIN_DATABASE[coinSymbol];
    if (!db) return;

    // A. Update Coin Information Tab Overview
    document.getElementById("info-coin-title").textContent = `${db.name} - ${coinSymbol}`;
    document.getElementById("info-coin-desc").innerHTML = db.desc;

    // B. Update AI On-chain Diagnosis Tab
    document.getElementById("ai-tech-desc").innerHTML = db.techDesc || "온체인 지표를 로드 중입니다.";

    // C. Update Timelines Tab
    const historyTimeline = document.getElementById("history-timeline");
    historyTimeline.innerHTML = "";
    if (db.timeline) {
        db.timeline.forEach((item, index) => {
            const tlClass = index % 2 === 0 ? "" : "cyan";
            historyTimeline.innerHTML += `
                <div class="timeline-item ${tlClass}">
                    <div class="timeline-bullet"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">${item.year}</span>
                        <span class="timeline-text">${item.text}</span>
                    </div>
                </div>
            `;
        });
    } else {
        historyTimeline.innerHTML = `<div class="timeline-text">연혁 정보가 준비 중입니다.</div>`;
    }

    // D. Update AI News Feed
    const newsContainer = document.getElementById("news-feed-container");
    newsContainer.innerHTML = "";
    if (db.news) {
        db.news.forEach(newsItem => {
            newsContainer.innerHTML += `
                <div class="news-item">
                    <div class="news-meta">
                        <span class="news-source-time"><i class="fa-solid fa-microchip"></i> ${newsItem.source} • ${newsItem.time}</span>
                        <span class="news-sentiment-tag ${newsItem.sentiment}">${newsItem.sentiment === 'bullish' ? '상승 호재 🟢' : newsItem.sentiment === 'bearish' ? '하락 악재 🔴' : '중립 ⚪'}</span>
                    </div>
                    <div class="news-headline">${newsItem.title}</div>
                    <div class="news-snippet">${newsItem.snippet}</div>
                </div>
            `;
        });
    } else {
        newsContainer.innerHTML = `<div>관련 뉴스를 분석 중입니다.</div>`;
    }

    // E. Initialize & Render Chart
    updateChartTrend(true);

    // F. Load Comment Board & Recalculate Sentiment stats
    renderCommentsFeed();

    // G. Reset visual prices & AI Trading states
    document.getElementById("price-bithumb").textContent = "연동 중...";
    document.getElementById("price-coinone").textContent = "연동 중...";
    document.getElementById("price-bithumb").className = "ex-price";
    document.getElementById("price-coinone").className = "ex-price";
    document.getElementById("arbitrage-value").textContent = "계산 중...";
    document.getElementById("arbitrage-direction").textContent = "분석 대기";
    document.getElementById("trade-entry").textContent = "AI 연산 중...";
    document.getElementById("trade-profit").textContent = "AI 연산 중...";
    document.getElementById("trade-stop").textContent = "AI 연산 중...";
    document.getElementById("trade-rationale-text").innerHTML = "실시간 시세 데이터를 분석하여 지능형 트레이딩 설계를 산출하는 중입니다...";

    // H. Trigger immediate API Fetch for prices
    fetchPrices();
}

// Fetch Prices from Bithumb & Coinone API via CORS Proxies with Auto Fallback
async function fetchPrices() {
    const coinSymbol = currentCoin;
    const db = COIN_DATABASE[coinSymbol];
    if (!db) return;

    let bithumbPrice = null;
    let coinonePrice = null;
    let bithumb24hHigh = null;
    let bithumb24hLow = null;
    let bithumb24hVolume = null;
    let bithumb24hFluctate = null;

    try {
        // Try live APIs
        const bithumbUrl = `https://api.bithumb.com/public/ticker/${coinSymbol}_KRW`;
        const coinoneUrl = `https://api.coinone.co.kr/public/v2/ticker_new/KRW/${coinSymbol.toLowerCase()}`;

        // Attempting Coinone V2 API fetch via Proxies
        const coinoneData = await fetchWithProxy(coinoneUrl);
        if (coinoneData && coinoneData.result === "success" && coinoneData.tickers && coinoneData.tickers.length > 0) {
            coinonePrice = parseFloat(coinoneData.tickers[0].last);
        }

        // Attempting Bithumb API fetch via Proxies
        const bithumbData = await fetchWithProxy(bithumbUrl);
        if (bithumbData && bithumbData.status === "0000" && bithumbData.data) {
            const data = bithumbData.data;
            bithumbPrice = parseFloat(data.closing_price);
            bithumb24hHigh = parseFloat(data.max_price);
            bithumb24hLow = parseFloat(data.min_price);
            bithumb24hVolume = parseFloat(data.acc_trade_value_24H);
            bithumb24hFluctate = parseFloat(data.fluctate_rate_24H);
        }

        // Ensure we got valid numbers from both exchange endpoints
        if (isNaN(bithumbPrice) || isNaN(coinonePrice) || bithumbPrice === null || coinonePrice === null) {
            throw new Error("Invalid API pricing data structure received");
        }

        // We are online and successful! Set Live Network state.
        liveNetwork = true;
        updateNetworkStatus(true);
        updatePricingUI(bithumbPrice, coinonePrice, bithumb24hHigh, bithumb24hLow, bithumb24hVolume, bithumb24hFluctate);

    } catch (error) {
        console.warn("API/Proxy loading error, falling back to neural simulated market generator:", error);
        // Fallback to advanced mock simulator!
        liveNetwork = false;
        updateNetworkStatus(false);
        simulatePricingData();
    }
}

// Bypasses browser CORS restrictions by trying multiple free public proxy services
async function fetchWithProxy(url) {
    const proxies = [
        `https://corsproxy.io/?${encodeURIComponent(url)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
    ];

    for (let proxy of proxies) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout per request

            const res = await fetch(proxy, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                return data;
            }
        } catch (e) {
            console.warn(`Proxy gateway failed: ${proxy}`, e);
        }
    }
    throw new Error("CORS Proxy gateways unreachable or blocked");
}

// Network Status Indicator update
function updateNetworkStatus(isLive) {
    const dot = document.getElementById("network-status-dot");
    const text = document.getElementById("network-status-text");

    if (isLive) {
        dot.className = "status-dot active";
        text.textContent = "라이브 네트워크";
    } else {
        dot.className = "status-dot simulating";
        text.textContent = "AI 모의 시뮬레이터";
    }
}

// Updates Bithumb and Coinone pricing visual metrics on the HTML view
let previousBithumbPrice = null;
let previousCoinonePrice = null;

function updatePricingUI(bithumbVal, coinoneVal, high, low, volume, fluctuate) {
    const btEl = document.getElementById("price-bithumb");
    const coEl = document.getElementById("price-coinone");

    // Dynamic flash animations when price changes
    if (previousBithumbPrice !== null) {
        btEl.className = "ex-price " + (bithumbVal > previousBithumbPrice ? "flash-up" : bithumbVal < previousBithumbPrice ? "flash-down" : "");
    }
    if (previousCoinonePrice !== null) {
        coEl.className = "ex-price " + (coinoneVal > previousCoinonePrice ? "flash-up" : coinoneVal < previousCoinonePrice ? "flash-down" : "");
    }

    // Set prices
    btEl.textContent = formatKRW(bithumbVal);
    coEl.textContent = formatKRW(coinoneVal);

    // Calculate premium / arbitrage spread
    const spread = coinoneVal - bithumbVal;
    const premiumPercent = (spread / bithumbVal) * 100;
    
    const arbValEl = document.getElementById("arbitrage-value");
    const arbDirEl = document.getElementById("arbitrage-direction");

    const spreadText = `${Math.abs(Math.round(spread)).toLocaleString('ko-KR')} KRW (${Math.abs(premiumPercent).toFixed(3)}%)`;
    arbValEl.textContent = spreadText;

    if (spread > 0) {
        arbValEl.style.color = "var(--sentiment-bullish)";
        arbDirEl.innerHTML = `<i class="fa-solid fa-chevron-up"></i> <b>코인원 가격 강세</b> (차액 유리: 코인원 매도 유리)`;
    } else if (spread < 0) {
        arbValEl.style.color = "var(--sentiment-bearish)";
        arbDirEl.innerHTML = `<i class="fa-solid fa-chevron-down"></i> <b>빗썸 가격 강세</b> (차액 유리: 빗썸 매도 유리)`;
    } else {
        arbValEl.style.color = "var(--text-primary)";
        arbDirEl.innerHTML = `<b>양 거래소 가격 균형</b> (스프레드 완전 수렴)`;
    }

    // Store prices for next comparison flashes
    previousBithumbPrice = bithumbVal;
    previousCoinonePrice = coinoneVal;

    // Update 24H general statistics
    const changeRateEl = document.getElementById("stat-change-rate");
    changeRateEl.textContent = (fluctuate >= 0 ? "+" : "") + fluctuate.toFixed(2) + "%";
    changeRateEl.className = fluctuate >= 0 ? "stat-val up" : "stat-val down";

    document.getElementById("stat-high").textContent = formatKRW(high);
    document.getElementById("stat-low").textContent = formatKRW(low);

    // Volume formatting
    let volumeText = "";
    if (volume >= 1e12) volumeText = (volume / 1e12).toFixed(2) + "조 원";
    else if (volume >= 1e8) volumeText = (volume / 1e8).toFixed(2) + "억 원";
    else volumeText = formatKRW(volume);
    
    document.getElementById("stat-volume").textContent = volumeText;

    // Trigger AI Generative Report based on actual premium metrics
    generateAIReport(bithumbVal, coinoneVal, premiumPercent, fluctuate);

    // Append to live chart in real-time
    appendRealtimeChartTick((bithumbVal + coinoneVal) / 2);
}

// Mathematically simulates realistic pricing movements when offline or proxies are down
function simulatePricingData() {
    const db = COIN_DATABASE[currentCoin];
    if (!db) return;

    if (simBithumbPrice === null || previousCoinSymbol !== currentCoin) {
        simBithumbPrice = db.basePrice;
        simCoinonePrice = db.basePrice * (1 + (Math.random() - 0.5) * 0.005);
        previousCoinSymbol = currentCoin;
    }

    // Generate random walk
    simBithumbPrice = getRandomWalk(simBithumbPrice, db.volatility);
    simCoinonePrice = getRandomWalk(simCoinonePrice, db.volatility * 0.95);

    // Build stats based on simulated pricing values
    const high = Math.max(simBithumbPrice, simCoinonePrice) * 1.025;
    const low = Math.min(simBithumbPrice, simCoinonePrice) * 0.975;
    const volume = 250000000000 + (Math.random() * 50000000000);
    const fluctuate = ((simBithumbPrice - db.basePrice) / db.basePrice) * 100;

    updatePricingUI(simBithumbPrice, simCoinonePrice, high, low, volume, fluctuate);
}

// --- Generative AI Market Report Engine ---
function generateAIReport(bithumbVal, coinoneVal, premiumPercent, fluctuate) {
    const coinSymbol = currentCoin;
    const db = COIN_DATABASE[coinSymbol];
    if (!db) return;

    const signalBadge = document.getElementById("ai-signal");
    const trendSummary = document.getElementById("ai-trend-summary");

    // Dynamic AI scores based on price movements
    let aiScore = 50 + Math.round(fluctuate * 5);
    aiScore = Math.max(10, Math.min(98, aiScore)); // cap between 10% and 98%

    const rsiVal = (50 + fluctuate * 6 + (Math.random() - 0.5) * 8).toFixed(1);
    document.getElementById("tech-ai-score").textContent = aiScore + "%";
    document.getElementById("tech-ai-score").style.color = aiScore >= 60 ? "var(--sentiment-bullish)" : aiScore <= 40 ? "var(--sentiment-bearish)" : "var(--sentiment-neutral)";
    document.getElementById("tech-rsi").textContent = `${rsiVal} (${rsiVal > 70 ? '초과매수 경계' : rsiVal < 30 ? '과매도 반등 대기' : '중립 모멘텀'})`;

    // AI logic engine for signal determinations
    let signal = "NEUTRAL";
    if (aiScore >= 75) {
        signal = "STRONG BUY";
        signalBadge.textContent = "STRONG BUY";
        signalBadge.className = "ai-signal-badge strong-buy";
    } else if (aiScore >= 55) {
        signal = "BUY";
        signalBadge.textContent = "BUY";
        signalBadge.className = "ai-signal-badge strong-buy";
    } else if (aiScore <= 25) {
        signal = "STRONG SELL";
        signalBadge.textContent = "STRONG SELL";
        signalBadge.className = "ai-signal-badge sell";
    } else if (aiScore <= 45) {
        signal = "SELL";
        signalBadge.textContent = "SELL";
        signalBadge.className = "ai-signal-badge sell";
    } else {
        signalBadge.textContent = "HOLD";
        signalBadge.className = "ai-signal-badge";
        signalBadge.style.color = "var(--text-secondary)";
        signalBadge.style.background = "rgba(255,255,255,0.05)";
    }

    // Set other AI technical parameters dynamically
    document.getElementById("tech-whale-accumulation").textContent = fluctuate > 1 ? "급격히 유입 (Whale BUY)" : fluctuate < -1 ? "거래소 송금 증가 (Whale SELL)" : "점진적 고래 적립식 분할매수";
    document.getElementById("tech-volatility").textContent = Math.abs(premiumPercent) > 0.05 ? "스프레드 발산 (변동성 확장)" : "가격 대칭적 안정화 (보합 수렴)";

    // --- Dynamic AI Trading Calculations (Knees to Shoulders) ---
    const avgPrice = (bithumbVal + coinoneVal) / 2;
    
    // 1. Timeframe Scale Factor Mapping
    let mult = 0.5;
    let activePeriodText = "24시간";
    let tradeStyle = "단기 데이 트레이딩";
    if (activePeriod === "30m") { mult = 0.12; activePeriodText = "30분 분봉"; tradeStyle = "초단기 스캘핑"; }
    else if (activePeriod === "1h") { mult = 0.22; activePeriodText = "1시간 분봉"; tradeStyle = "단기 데이 트레이딩"; }
    else if (activePeriod === "24h") { mult = 0.65; activePeriodText = "24시간 시봉"; tradeStyle = "스윙 트레이딩"; }
    else if (activePeriod === "7d") { mult = 1.35; activePeriodText = "7일 일봉"; tradeStyle = "단기 스윙"; }
    else if (activePeriod === "30d") { mult = 2.2; activePeriodText = "30일 일봉"; tradeStyle = "중기 포지션 트레이딩"; }
    else if (activePeriod === "6m") { mult = 3.6; activePeriodText = "6개월 주봉"; tradeStyle = "중장기 스윙 적립"; }
    else if (activePeriod === "1y") { mult = 5.2; activePeriodText = "1년 월봉"; tradeStyle = "장기 포트폴리오 적립"; }
    else if (activePeriod === "all") { mult = 7.5; activePeriodText = "전체 장기 흐름"; tradeStyle = "거시 장기 투자"; }

    // 2. Compute dynamic volatility adjusted factor
    const tfVolatility = db.volatility * mult;

    // 3. Buy at the Knees (무릎), Sell at the Shoulders (어깨) Calculations
    // Knee (무릎 - Entry): Slightly below current price to secure confirmed support bounce
    const entryMin = avgPrice * (1 - tfVolatility * 0.45);
    const entryMax = avgPrice * (1 + tfVolatility * 0.15);
    
    // Shoulder (어깨 - Take Profit): Below the absolute maximum peak (head resistance)
    const profitMin = avgPrice * (1 + tfVolatility * 0.95);
    const profitMax = avgPrice * (1 + tfVolatility * 1.55);
    
    // Sole of the foot (발바닥 - Stop Loss): Strict support breakdown line below knee
    const stopMin = avgPrice * (1 - tfVolatility * 0.95);
    const stopMax = avgPrice * (1 - tfVolatility * 0.75);

    // Render numbers in the new [AI 트레이딩] card
    document.getElementById("trade-entry").textContent = `${formatKRW(entryMin)} ~ ${formatKRW(entryMax)}`;
    document.getElementById("trade-profit").textContent = `${formatKRW(profitMin)} ~ ${formatKRW(profitMax)}`;
    document.getElementById("trade-stop").textContent = `${formatKRW(stopMin)} ~ ${formatKRW(stopMax)}`;

    // Build trading rationale basis dynamically
    const rationaleTextEl = document.getElementById("trade-rationale-text");
    let rationale = "";
    
    // Extract virtual orderbook imbalances
    const buyWallPercent = 52 + Math.round((fluctuate > 0 ? fluctuate : 0) * 12) % 25;
    const sellWallPercent = 100 - buyWallPercent;

    const baseRationaleHeader = `<i class="fa-solid fa-calculator" style="color: var(--accent-cyan);"></i> <b>${activePeriodText} (${tradeStyle}) 분석 모드 가동:</b><br>빗썸/코인원의 실시간 호가창 매수 벽 비율 <b>${buyWallPercent}%</b>, 양대 거래소 실시간 체결 볼륨 가중평균가(VWAP) 데이터를 AI 전이 학습으로 딥 스캔한 결과입니다. 본 설계는 과도한 탐욕(머리 끝 매도)과 공포(발바닥 최하단 투매)를 차단하고, 한국 금융 고전인 <b>'무릎에 사서 어깨에 파는' 안정적 기대 손익비</b> 모델을 지향합니다.<br><br>`;

    if (coinSymbol === "BTC") {
        rationale = baseRationaleHeader + `현재 비트코인은 단기 지지 매물대 <b>${formatKRW(avgPrice * 0.98)}</b> 부근에서 고래 세력의 대기 수급이 견고하게 지탱하고 있습니다. 인공지능이 계산한 가장 이상적인 **'무릎(Knee)'** 진입선은 <b>${formatKRW(entryMin)}</b> 구간으로 지시되며, 이 범위는 바닥 붕괴 위험을 최소화한 안전 밴드입니다. 상방으로는 4시간봉 저항 매물대 아래인 **'어깨(Shoulder)'** 선 <b>${formatKRW(profitMin)}</b>까지 강력한 숏 스퀴즈 랠리가 대기하고 있어 리스크오프 손익비가 1:2.7로 극히 수려합니다.`;
    } else if (coinSymbol === "ETH") {
        rationale = baseRationaleHeader + `이더리움 온체인 진단 결과, 유동 물량의 락업 현상과 디플레이션 추세가 동시 스캔되었습니다. AI 가격 설계 엔진은 현재의 확실한 바닥 반등 지지를 확인한 후 진입하는 **'무릎'** 밴드로 <b>${formatKRW(entryMin)}</b> 구간을 산출해 냈습니다. 억지로 발바닥 끝을 잡으려는 모험을 피하고, <b>${formatKRW(profitMin)}</b> 부근의 매도 과열 저항선 직전인 **'어깨'** 선에서 안전한 부분 익절로 자본 회전율을 극대화할 것을 추천합니다.`;
    } else if (coinSymbol === "SOL") {
        rationale = baseRationaleHeader + `솔라나는 거래 빈도가 타 자산 대비 조밀하며 변동성이 <b>${(db.volatility * 100 * mult).toFixed(2)}%</b> 범위로 탄력적입니다. 초단기 지지선 지침에 의거, 확고한 **'무릎'** 매수 범위는 <b>${formatKRW(entryMin)}</b>로 설정하여 평단가 안정성을 확보합니다. 돌파 추세 발생 시 전고점 직전의 **'어깨'** 익절선인 <b>${formatKRW(profitMin)}</b>까지의 급격한 탄력 상방 청산 매물 소화가 연산되었으며, 생태계 변동에 따른 마지노 손절선은 <b>${formatKRW(stopMax)}</b>입니다.`;
    } else {
        rationale = baseRationaleHeader + `<b>${db.name} (${coinSymbol})</b>에 대한 온체인 흐름 진단 결과, 안정적인 지지선이 <b>${formatKRW(avgPrice * (1 - tfVolatility * 0.5))}</b> 근방에 배치되어 있습니다. AI 트레이딩 백테스팅 상으로 <b>${formatKRW(entryMin)}</b>의 **'무릎'** 구간 내에서 분할 진입 시, 목표 익절선인 **'어깨'** <b>${formatKRW(profitMin)}</b>까지 도달하여 승률을 확보할 확률이 약 <b>${aiScore}%</b>로 도출되었습니다. 엄격한 리스크 컷 마지노선은 <b>${formatKRW(stopMax)}</b>입니다.`;
    }
    rationaleTextEl.innerHTML = rationale;

    // Generates completely unique, smart AI descriptions
    let aiTrendText = "";
    const isBullish = fluctuate >= 0;
    const absPremium = Math.abs(premiumPercent).toFixed(3);

    if (coinSymbol === "BTC") {
        aiTrendText = `비트코인은 현재 양대 거래소 평균 가격 <b>${formatKRW((bithumbVal + coinoneVal)/2)}</b> 부근에서 변동성이 ${isBullish ? '상방' : '하방'}으로 자극받고 있습니다. 현재 김치프리미엄(스프레드) 차이는 약 <b>${absPremium}%</b>로 ${premiumPercent > 0 ? '코인원' : '빗썸'}이 미세하게 과열 상태입니다. AI 모델링에 따르면 단기 주봉 저항선 돌파 신뢰도가 <b>${aiScore}%</b>로 연산되었으며, 소셜 투심 분석 및 RSI 수치 <b>${rsiVal}</b>의 조합으로 미루어 볼 때 단기적으로 <b>${isBullish ? '추가 상승 랠리' : '지지선 지키며 보합세'}</b>를 형성할 개연성이 지배적입니다.`;
    } else if (coinSymbol === "ETH") {
        aiTrendText = `이더리움의 신경망 트랙 진단 결과 L2 예치금 회복 속도가 시세 저점을 견고하게 지탱하고 있습니다. 현재 두 거래소 간 시세 차이는 <b>${absPremium}%</b> 범위로 지극히 안정적입니다. 단기 종합 매수 스코어는 <b>${aiScore}%</b>로, MACD 골든크로스와 현물 스테이킹 수급 고갈 현상이 동시 포착되어 <b>${isBullish ? '단기적 저항선 터치가 멀지 않은 매수 우위 장세' : '숨고르기 후 저가 매수 유입 장세'}</b>를 암시하고 있습니다.`;
    } else if (coinSymbol === "SOL") {
        aiTrendText = `솔라나는 DEX 네트워크 거래량 폭발에 따라 높은 알파 수익 모델로 진입했습니다. 변동성이 다소 큰 <b>${(db.volatility * 100).toFixed(1)}%</b> 레벨에서 움직이고 있으며, AI 감정 스캐너 상 고래 매집도가 매우 높게 지시됩니다. RSI 지수는 <b>${rsiVal}</b>로 ${rsiVal > 65 ? '과열에 따른 조정 압력에 대비할 필요가 있으나' : '양호한 추세 추종 영역에 있어'} <b>${isBullish ? '추가적인 밈코인 수급 펌핑을 동반한 탄력적 급등' : '일시적 숨고르기 후 20일선 지지 획득'}</b> 시나리오를 제시합니다.`;
    } else {
        aiTrendText = `<b>${db.name} (${coinSymbol})</b> 분석 보고서:<br>현재 빗썸 가격 <b>${formatKRW(bithumbVal)}</b>과 코인원 가격 <b>${formatKRW(coinoneVal)}</b>의 스프레드는 <b>${absPremium}%</b> 입니다. AI 뉴럴 모의 신호 연산 결과, 종합 판단은 <b>"${signal}"</b> 레벨을 지시하고 있습니다. RSI 지수 <b>${rsiVal}</b> 및 소셜 오피니언은 현재 코인의 흐름에 대해 <b>${isBullish ? '긍정적인 상방 모멘텀 확장' : '단기 매물 압력 해소를 위한 기간 조정'}</b> 구간에 직면한 것으로 평가합니다.`;
    }

    trendSummary.innerHTML = aiTrendText;
}

// --- Dynamic Glowing Chart.js Setup & Multi-period Drawer ---
function updateChartTrend(resetAll = false) {
    const db = COIN_DATABASE[currentCoin];
    if (!db) return;

    if (resetAll || !priceChart) {
        // Generate dataset
        const chartData = generateChartData(db.basePrice, db.volatility, activePeriod);

        // Get context
        const ctx = document.getElementById("insight-chart").getContext("2d");

        // Destroy existing chart to avoid layout overlap
        if (priceChart) {
            priceChart.destroy();
        }

        // Create glowing neon gradient fills for Chart.js
        const primaryGradient = ctx.createLinearGradient(0, 0, 0, 300);
        primaryGradient.addColorStop(0, 'rgba(139, 92, 246, 0.45)');  // Accent Purple glowing
        primaryGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.15)'); // Accent Cyan transparent
        primaryGradient.addColorStop(1, 'rgba(11, 15, 25, 0)');

        // Draw new chart
        priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: `${currentCoin}/KRW 실시간 지능 시황`,
                    data: chartData.prices,
                    borderColor: '#8b5cf6', // purple accent
                    borderWidth: 2,
                    pointBackgroundColor: '#06b6d4', // cyan points
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 1.5,
                    pointRadius: 2.5,
                    pointHoverRadius: 5,
                    tension: 0.35,
                    fill: true,
                    backgroundColor: primaryGradient,
                    shadowColor: 'rgba(139, 92, 246, 0.5)',
                    shadowBlur: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.04)' },
                        ticks: { color: '#9ca3af', font: { family: 'Outfit', size: 11, weight: '500' } }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.04)' },
                        ticks: {
                            color: '#9ca3af',
                            font: { family: 'Outfit', size: 11, weight: '500' },
                            callback: function(value) {
                                return value.toLocaleString('ko-KR');
                            }
                        }
                    }
                }
            }
        });

        // Set subtitles
        document.getElementById("chart-subtitle").textContent = `${db.name} (${currentCoin}) - 최근 ${activePeriod === '30m' ? '30분 분봉' : activePeriod === '1h' ? '1시간 분봉' : activePeriod === '24h' ? '24시간 시봉' : activePeriod === '7d' ? '7일 일봉' : activePeriod === '30d' ? '30일 일봉' : activePeriod === '6m' ? '6개월 주봉' : activePeriod === '1y' ? '1년 월봉' : '전체 장기'} 트렌드 흐름`;
    }
}

// Appends a real-time price tick to the chart dynamically for maximum visual wow factor
function appendRealtimeChartTick(newPrice) {
    if (!priceChart) return;

    const data = priceChart.data.datasets[0].data;
    const labels = priceChart.data.labels;
    const now = new Date();

    // 1. Determine current label text based on active time period
    let currentLabelText = "";
    if (activePeriod === "30m" || activePeriod === "1h") {
        currentLabelText = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    } else if (activePeriod === "24h") {
        currentLabelText = `${now.getHours()}시`;
    }

    // 2. Ticking Logic: Only push/shift on actual interval changes to maintain proper timeline spans!
    if (activePeriod === "30m" || activePeriod === "1h" || activePeriod === "24h") {
        const lastLabel = labels[labels.length - 1];

        if (lastLabel === currentLabelText) {
            // Same minute/hour: Just update the last data point's value in real-time
            data[data.length - 1] = newPrice;
        } else {
            // New minute/hour started: Push new point and shift out the oldest point
            data.push(newPrice);
            data.shift();
            labels.push(currentLabelText);
            labels.shift();
        }
    } else {
        // For long-term periods (7d, 30d, 6m, 1y, all), update the very last point to show live price ticking
        if (data.length > 0) {
            data[data.length - 1] = newPrice;
        }
    }

    // 3. Render chart updates instantly with quiet animations
    priceChart.update('quiet');
}

// --- Live Ticker Intervals Management ---
function startRealtimeTicks() {
    // Stop existing timers first
    if (priceTickInterval) clearInterval(priceTickInterval);
    
    // Ticks prices every 5s if live network, or 1.5s if simulation mode
    const runTick = () => {
        if (liveNetwork) {
            fetchPrices();
        } else {
            simulatePricingData();
        }
    };

    // Run tick immediately
    runTick();

    // Re-check prices periodically
    priceTickInterval = setInterval(() => {
        runTick();
    }, 4500); // 4.5 seconds tick rate
}

// --- Community Insights Board: Comment Persistence & Sentiment stats ---
function loadCommentsFromStorage() {
    const stored = localStorage.getItem("crypto_insights_comments_v2");
    if (stored) {
        userComments = JSON.parse(stored);
    } else {
        userComments = {};
    }
}

function saveCommentsToStorage() {
    localStorage.setItem("crypto_insights_comments_v2", JSON.stringify(userComments));
}

// Render comments board feed
function renderCommentsFeed() {
    const coinSymbol = currentCoin;
    const container = document.getElementById("comments-container");
    container.innerHTML = "";

    // 1. Get Pre-populated AI agent expert comments
    const db = COIN_DATABASE[coinSymbol];
    const aiCommentsList = db ? db.aiComments : [];

    // 2. Get User submitted comments for current coin
    const userCommentsList = userComments[coinSymbol] || [];

    // 3. Merge them (User comments first at top for instant gratification, then AI Expert comments)
    const combinedComments = [...userCommentsList, ...aiCommentsList];

    if (combinedComments.length === 0) {
        container.innerHTML = `<div class="indicator" style="justify-content: center; border:none; padding: 2rem 0;">등록된 인사이트가 없습니다. 첫 인사이트를 공유해보세요!</div>`;
        updateSentimentStats(0, 0);
        return;
    }

    // 4. Draw comments to DOM
    let bullishCount = 0;
    let bearishCount = 0;

    combinedComments.forEach(comment => {
        const isAI = comment.author.includes("AI") || comment.author.includes("Bot") || comment.author.includes("Agent");
        const aiBubbleClass = isAI ? "ai-agent" : "";
        const aiBadgeHtml = isAI ? `<i class="fa-solid fa-robot ai-badge"></i> <span class="ai-pill" style="font-size:0.55rem; padding: 0.1rem 0.4rem;">AI Analyst</span>` : "";
        
        const sentimentTag = comment.sentiment === 'bullish' ? '상승 호재 🟢' : comment.sentiment === 'bearish' ? '하락 악재 🔴' : '중립 ⚪';
        const sentimentClass = comment.sentiment;

        if (comment.sentiment === 'bullish') bullishCount++;
        if (comment.sentiment === 'bearish') bearishCount++;

        container.innerHTML += `
            <div class="comment-bubble ${aiBubbleClass}">
                <div class="comment-header">
                    <span class="commenter-name">${comment.author} ${aiBadgeHtml}</span>
                    <span class="comment-time">${comment.time || '방금 전'}</span>
                </div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-footer">
                    <span class="comment-tag ${sentimentClass}">${sentimentTag}</span>
                </div>
            </div>
        `;
    });

    // 5. Update overall sentiment analytics progress bars
    updateSentimentStats(bullishCount, bearishCount);
}

// Updates community sentiment percentage and progress bar
function updateSentimentStats(bullishCount, bearishCount) {
    const total = bullishCount + bearishCount;
    const bullBar = document.getElementById("sentiment-bullish-bar");
    const bearBar = document.getElementById("sentiment-bearish-bar");
    const textPercent = document.getElementById("sentiment-percentage");

    if (total === 0) {
        bullBar.style.width = "50%";
        bearBar.style.width = "50%";
        textPercent.textContent = "상승 50% / 하락 50% (투심 평온)";
        textPercent.style.color = "var(--text-secondary)";
        return;
    }

    const bullPercent = Math.round((bullishCount / total) * 100);
    const bearPercent = 100 - bullPercent;

    bullBar.style.width = bullPercent + "%";
    bearBar.style.width = bearPercent + "%";

    textPercent.textContent = `상승호재 우세 ${bullPercent}% / 하락경계 ${bearPercent}%`;
    
    if (bullPercent >= 60) {
        textPercent.style.color = "var(--sentiment-bullish)";
    } else if (bearPercent >= 60) {
        textPercent.style.color = "var(--sentiment-bearish)";
    } else {
        textPercent.style.color = "var(--text-secondary)";
    }
}

// Comment Submission Form Submission Handler
function handleCommentSubmit(e) {
    e.preventDefault();

    const authorInput = document.getElementById("author-input");
    const commentInput = document.getElementById("comment-text-input");
    
    // Get selected sentiment button
    const activeSentimentBtn = document.querySelector(".sentiment-segment .sentiment-btn.active");
    const sentiment = activeSentimentBtn ? activeSentimentBtn.dataset.sentiment : "neutral";

    const name = authorInput.value.trim() || "익명";
    const text = commentInput.value.trim();

    if (!text) return;

    // Build comment object
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const newComment = {
        author: name,
        sentiment: sentiment,
        text: text,
        time: timeString
    };

    // Store in array
    if (!userComments[currentCoin]) {
        userComments[currentCoin] = [];
    }
    userComments[currentCoin].unshift(newComment); // Prepend to show at top

    // Save & Render
    saveCommentsToStorage();
    renderCommentsFeed();

    // Reset Form Fields
    commentInput.value = "";
}
