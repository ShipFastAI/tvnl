/* Plain browser JavaScript keeps the approved static prototype file-openable. */
const pair = (en, hi) => ({ en, hi })
let language = 'en'
let currentView = 'home'
const scrapedPages = Array.isArray(globalThis.TVNL_SCRAPED_PAGES)
  ? globalThis.TVNL_SCRAPED_PAGES
  : []
const scrapedDocuments = Array.isArray(globalThis.TVNL_SCRAPED_DOCUMENTS)
  ? globalThis.TVNL_SCRAPED_DOCUMENTS
  : []
const t = (value) => value[language]
const escapeText = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ],
  )
const section = (id, en, hi, bodyEn, bodyHi, source, image) => ({
  id,
  title: pair(en, hi),
  body: pair(bodyEn, bodyHi),
  source,
  image,
})
const pages = {
  company: {
    title: pair('The Company', 'कंपनी'),
    intro: pair(
      'Jharkhand’s own generation utility — powering the state since 1996.',
      'झारखंड की अपनी उत्पादन निगम — 1996 से राज्य को ऊर्जा प्रदान करती हुई।',
    ),
    sections: [
      section(
        'overview',
        'Who We Are',
        'हम कौन हैं',
        'Tenughat Vidyut Nigam Limited is the power generation company of the Government of Jharkhand. Incorporated on 26 November 1987 under the Companies Act, 1956 and headquartered at Ranchi Smart City, TVNL owns and operates Tenughat Thermal Power Station at Lalpania, on the left bank of the Tenughat reservoir in Bokaro district.\n\nThe station first generated on 9 December 1995; two 210 MW units in commercial service since 1996 and 1997 give it an installed capacity of 420 MW. Its founding objectives — reliable generation, ecological conservation and the social and economic uplift of the region — still frame the mandate. That mandate is widening: supercritical expansion, a planned solar project and a captive coal block together outline the company’s next chapter.',
        'तेनुघाट विद्युत निगम लिमिटेड झारखंड सरकार की विद्युत उत्पादन कंपनी है। 26 नवंबर 1987 को कंपनी अधिनियम, 1956 के अंतर्गत स्थापित और राँची स्मार्ट सिटी में मुख्यालय वाली टीवीएनएल बोकारो जिले में तेनुघाट जलाशय के बाएँ तट पर ललपनिया स्थित तेनुघाट ताप विद्युत केंद्र की मालिक और संचालक है।\n\nकेंद्र ने 9 दिसंबर 1995 को पहली बार विद्युत उत्पादन किया; क्रमशः 1996 और 1997 से वाणिज्यिक सेवा में दो 210 मेगावाट इकाइयाँ इसे 420 मेगावाट की स्थापित क्षमता देती हैं। इसके संस्थापक उद्देश्य — विश्वसनीय उत्पादन, पारिस्थितिक संरक्षण और क्षेत्र की सामाजिक-आर्थिक उन्नति — आज भी दायित्व की रूपरेखा देते हैं। यह दायित्व विस्तारित हो रहा है: सुपरक्रिटिकल विस्तार, प्रस्तावित सौर परियोजना और एक कैप्टिव कोयला खंड — ये सब कंपनी के अगले अध्याय की रूपरेखा बनाते हैं।',
        'abt_us.php',
        {
          src: 'assets/abt.jpg',
          alt: pair(
            'Tenughat Thermal Power Station — main plant block and chimney',
            'तेनुघाट ताप विद्युत केंद्र — मुख्य संयंत्र भवन और चिमनी',
          ),
          caption: pair(
            'Tenughat Thermal Power Station, Lalpania',
            'तेनुघाट ताप विद्युत केंद्र, ललपनिया',
          ),
        },
      ),
      section(
        'organisation',
        'How We Are Organised',
        'हमारी संरचना',
        'TVNL runs on a compact structure: a Board of Directors that sets direction, a Managing Director accountable for operations, and two establishments — the Ranchi head office and the TTPS plant — each working to a published organization chart.\n\nIncorporated on 26 November 1987 under the Companies Act, 1956, the company became a Government of Jharkhand undertaking when the state was formed in 2000.',
        'टीवीएनएल एक सुसंगठित ढाँचे पर चलती है: दिशा तय करने वाला निदेशक मंडल, परिचालन के प्रति उत्तरदायी प्रबंध निदेशक, और दो प्रतिष्ठान — राँची मुख्यालय तथा टीटीपीएस संयंत्र — प्रत्येक प्रकाशित संगठनात्मक चार्ट के अनुसार कार्यरत।\n\n26 नवंबर 1987 को कंपनी अधिनियम, 1956 के अंतर्गत स्थापित यह कंपनी वर्ष 2000 में राज्य के गठन के साथ झारखंड सरकार का उपक्रम बनी।',
        'pdf/tvnl_hdqrtr_orgzn_struct.pdf',
        {
          src: 'assets/stock-control-room.jpg',
          alt: pair(
            'Power station control room panel',
            'विद्युत केंद्र नियंत्रण कक्ष पैनल',
          ),
          caption: pair(
            'Station control — representative image',
            'केंद्र नियंत्रण — प्रतिनिधि चित्र',
          ),
        },
      ),
      section(
        'headquarter-chart',
        'Corporate Office, Ranchi',
        'कॉर्पोरेट कार्यालय, राँची',
        'The head office at JUPMI Building, Ranchi Smart City, Dhurwa — Ranchi 834004 houses corporate leadership, finance, commercial and regulatory functions. It keeps working hours Monday to Friday, 10:00 AM to 6:00 PM. Its organization chart is published for public reference.',
        'जुपमी भवन, राँची स्मार्ट सिटी, धुर्वा — राँची 834004 स्थित मुख्यालय में कॉर्पोरेट नेतृत्व, वित्त, वाणिज्यिक और नियामक कार्य हैं। कार्य समय सोमवार से शुक्रवार, प्रातः 10 बजे से सायं 6 बजे तक है। इसका संगठनात्मक चार्ट जन संदर्भ हेतु प्रकाशित है।',
        'pdf/tvnl_hdqrtr_orgzn_struct.pdf',
      ),
      section(
        'plant-chart',
        'TTPS, Lalpania',
        'टीटीपीएस, ललपनिया',
        'The Lalpania establishment — Tenughat Thermal Power Station, Bokaro 829149 — runs generation, maintenance, fuel handling, ash management and auxiliary services around the clock. Its organization chart is published for public reference.',
        'ललपनिया प्रतिष्ठान — तेनुघाट ताप विद्युत केंद्र, बोकारो 829149 — उत्पादन, रखरखाव, ईंधन प्रबंधन, राख प्रबंधन और सहायक सेवाओं का चौबीसों घंटे संचालन करता है। इसका संगठनात्मक चार्ट जन संदर्भ हेतु प्रकाशित है।',
        'pdf/ttps_plant_orgztnstruc.pdf',
      ),
      section(
        'board',
        'Board of Directors',
        'निदेशक मंडल',
        'The Board provides strategic oversight and alignment with the Government of Jharkhand.\n\nShri Avinash Kumar, IAS — Chairman; Principal Secretary, Energy, Government of Jharkhand. Shri Ajoy Kumar Singh, IAS — Director; Principal Secretary, Finance, Government of Jharkhand. Sri Anil Kumar Sharma — Managing Director.',
        'निदेशक मंडल रणनीतिक निरीक्षण और झारखंड सरकार के साथ समन्वय प्रदान करता है।\n\nश्री अविनाश कुमार, भा.प्र.से. — अध्यक्ष; प्रधान सचिव, ऊर्जा विभाग, झारखंड सरकार। श्री अजय कुमार सिंह, भा.प्र.से. — निदेशक; प्रधान सचिव, वित्त विभाग, झारखंड सरकार। श्री अनिल कुमार शर्मा — प्रबंध निदेशक।',
        'bod.php',
      ),
      section(
        'messages',
        'From the Leadership',
        'नेतृत्व की ओर से',
        'Published messages from the Chairman and the Managing Director on TVNL’s direction, performance and public mandate.',
        'टीवीएनएल की दिशा, प्रदर्शन और जन दायित्व पर अध्यक्ष तथा प्रबंध निदेशक के प्रकाशित संदेश।',
        'm_msgs.php',
      ),
      section(
        'chairman',
        'Chairman’s Message',
        'अध्यक्ष का संदेश',
        'The Chairman’s message addresses energy security for Jharkhand and the institutional strengthening of the company. The published message is preserved in the official record.',
        'अध्यक्ष के संदेश में झारखंड की ऊर्जा सुरक्षा और कंपनी के संस्थागत सुधार पर बात की गई है। प्रकाशित संदेश आधिकारिक अभिलेख में सुरक्षित है।',
        'c_msgs.php',
      ),
      section(
        'managing-director',
        'Managing Director’s Message',
        'प्रबंध निदेशक का संदेश',
        'Sri Anil Kumar Sharma leads TVNL’s executive operations. His published message covers generation performance, the expansion programme and the company’s accountability to the public it serves.',
        'श्री अनिल कुमार शर्मा टीवीएनएल के कार्यकारी परिचालन का नेतृत्व करते हैं। उनके प्रकाशित संदेश में उत्पादन प्रदर्शन, विस्तार कार्यक्रम और जनता के प्रति कंपनी की उत्तरदायित्व पर चर्चा है।',
        'm_msgs.php',
        {
          src: 'assets/MD_Tvnl.jpg',
          alt: pair(
            'Sri Anil Kumar Sharma, Managing Director, TVNL',
            'श्री अनिल कुमार शर्मा, प्रबंध निदेशक, टीवीएनएल',
          ),
          caption: pair(
            'Sri Anil Kumar Sharma · Managing Director',
            'श्री अनिल कुमार शर्मा · प्रबंध निदेशक',
          ),
          mode: 'portrait',
        },
      ),
      section(
        'strength',
        'People & Capability',
        'जनशक्ति और क्षमता',
        'Engineers, operators and administrators keep two 210 MW units in continuous service — backed by three decades of operating experience, an established township at Lalpania and a dedicated coal supply chain.\n\nThe same team now carries the expansion programme forward alongside the state’s wider energy goals.',
        'इंजीनियर, ऑपरेटर और प्रशासक दो 210 मेगावाट इकाइयों को निरंतर सेवा में रखते हैं — तीन दशकों के परिचालन अनुभव, ललपनिया की स्थापित टाउनशिप और समर्पित कोयला आपूर्ति शृंखला के समर्थन से।\n\nयही टीम अब राज्य के व्यापक ऊर्जा लक्ष्यों के साथ विस्तार कार्यक्रम को आगे बढ़ा रही है।',
        'sc.php',
        {
          src: 'assets/plant-sl1.jpg',
          alt: pair(
            'Tenughat Thermal Power Station buildings',
            'तेनुघाट ताप विद्युत केंद्र के भवन',
          ),
          caption: pair(
            'The station establishment at Lalpania, Bokaro',
            'ललपनिया, बोकारो में केंद्र परिसर',
          ),
        },
      ),
      section(
        'businesses',
        'What We Do',
        'हम क्या करते हैं',
        'Thermal generation is TVNL’s operating business today — coal in, dependable megawatts out, delivered to the state grid through JUSNL.\n\nThe development portfolio extends that core: 2×660 MW supercritical units planned at Lalpania, a 50 MW solar photovoltaic project and the Rajbar E&D coal block in Latehar — allotted to TVNL in March 2015 with geological reserves of 420 MT and a peak rated capacity of 10 MTPA — securing the expansion’s fuel supply.',
        'ताप विद्युत उत्पादन आज टीवीएनएल का परिचालन व्यवसाय है — कोयला अंदर, विश्वसनीय मेगावाट बाहर, जेईयूएसएनएल के माध्यम से राज्य ग्रिड तक।\n\nविकास पोर्टफोलियो इस मूल का विस्तार करता है: ललपनिया में 2×660 मेगावाट सुपरक्रिटिकल इकाइयों की योजना, 50 मेगावाट सौर फोटोवोल्टिक परियोजना और विस्तार के ईंधन सुरक्षा हेतु लातेहार का राजबार ई एंड डी कोयला खंड — मार्च 2015 में टीवीएनएल को आवंटित, 420 मिलियन टन भौगोलिक भंडार और 10 मिलियन टन वार्षिक शिखर क्षमता के साथ — जो विस्तार की ईंधन सुरक्षा सुनिश्चित करता है।',
        'bs.php',
        {
          src: 'assets/stock-coal.jpg',
          alt: pair(
            'Coal — the station’s primary fuel',
            'कोयला — केंद्र का प्राथमिक ईंधन',
          ),
          caption: pair(
            'Fuel security — the Rajbar E&D coal block, Latehar',
            'ईंधन सुरक्षा — राजबार ई एंड डी कोयला खंड, लातेहार',
          ),
        },
      ),
      section(
        'policies',
        'Policies & Governance',
        'नीतियाँ और शासन',
        'TVNL conducts business under published policies covering procurement, conduct, vigilance and disclosure. The public channel keeps these documents open to citizens, vendors and auditors.',
        'टीवीएनएल खरीद, आचरण, सतर्कता और प्रकटीकरण संबंधी प्रकाशित नीतियों के अंतर्गत कार्य करती है। जन माध्यम ये दस्तावेज़ नागरिकों, विक्रेताओं और लेखापरीक्षकों के लिए खुले रखता है।',
        'pg.php',
      ),
      section(
        'awards',
        'Recognition',
        'मान्यता',
        'Operational milestones, institutional recognition and published achievements are recorded in the public archive.',
        'परिचालन मील के पत्थर, संस्थागत मान्यता और प्रकाशित उपलब्धियाँ जन अभिलेखागार में दर्ज हैं।',
        'aachi.php',
      ),
    ],
  },
  generation: {
    title: pair('Power Generation', 'विद्युत उत्पादन'),
    intro: pair(
      '420 MW installed today. A planned expansion of Jharkhand’s generation capacity.',
      'आज 420 मेगावाट स्थापित क्षमता। झारखंड की उत्पादन क्षमता के विस्तार की योजना।',
    ),
    sections: [
      section(
        'plants',
        'Operational Power Plants',
        'परिचालन विद्युत संयंत्र',
        'Tenughat Thermal Power Station (TTPS), Lalpania, Bokaro, operates two 210 MW units. Unit I entered commercial operation in September 1996 and Unit II in September 1997.',
        'तेनुघाट ताप विद्युत केंद्र, ललपनिया, बोकारो में दो 210 मेगावाट इकाइयाँ हैं। इकाई I का वाणिज्यिक परिचालन सितंबर 1996 और इकाई II का सितंबर 1997 में आरंभ हुआ।',
        'oppl.php',
        {
          src: 'assets/stock-plant-dusk.jpg',
          alt: pair(
            'Coal-fired power station with cooling towers',
            'शीतलन मीनारों सहित कोयला आधारित विद्युत केंद्र',
          ),
          caption: pair(
            'Coal-fired generation — representative image',
            'कोयला आधारित उत्पादन — प्रतिनिधि चित्र',
          ),
        },
      ),
      section(
        'installed',
        'Installed Capacity',
        'स्थापित क्षमता',
        'Installed thermal capacity: 420 MW (2 × 210 MW). Planned expansion: 2 × 660 MW supercritical units, taking total thermal capacity to 1,740 MW. A separate 50 MW solar PV project is planned. Expansion figures describe planned capacity, not current generation.',
        'स्थापित ताप विद्युत क्षमता: 420 मेगावाट (2 × 210 मेगावाट)। प्रस्तावित विस्तार: 2 × 660 मेगावाट सुपरक्रिटिकल इकाइयाँ, जिससे कुल ताप विद्युत क्षमता 1,740 मेगावाट होगी। अलग से 50 मेगावाट सौर परियोजना प्रस्तावित है। विस्तार के आँकड़े प्रस्तावित क्षमता दर्शाते हैं, वर्तमान उत्पादन नहीं।',
        'icap.php',
        {
          src: 'assets/stock-towers.jpg',
          alt: pair(
            'Cooling towers of a thermal power station',
            'ताप विद्युत केंद्र की शीतलन मीनारें',
          ),
          caption: pair(
            'Cooling water circuit — representative image',
            'शीतलन जल चक्र — प्रतिनिधि चित्र',
          ),
        },
      ),
      section(
        'performance',
        'Performance Highlights',
        'प्रदर्शन की मुख्य बातें',
        'Published historical plant load factor: 48.08% in FY2021–22 and 70.33% in FY2022–23, as recorded in the JSERC TVNL tariff order. These are historical figures. Current operational readings are not supplied by this public website.',
        'जेएसईआरसी के टीवीएनएल टैरिफ आदेश के अनुसार प्रकाशित ऐतिहासिक संयंत्र भार गुणांक: वित्त वर्ष 2021–22 में 48.08% और 2022–23 में 70.33%। ये ऐतिहासिक आँकड़े हैं। इस सार्वजनिक वेबसाइट पर वर्तमान परिचालन रीडिंग उपलब्ध नहीं हैं।',
        'https://jserc.org/pdf/tariff_order/tvnl-2026.pdf',
        {
          src: 'assets/stock-pylons.jpg',
          alt: pair(
            'High-voltage transmission towers',
            'उच्च वोल्टेज पारेषण मीनारें',
          ),
          caption: pair(
            'Evacuation to the state grid — representative image',
            'राज्य ग्रिड तक निकासी — प्रतिनिधि चित्र',
          ),
        },
      ),
    ],
  },
  sustainability: {
    title: pair('Sustainability', 'सतत विकास'),
    intro: pair(
      'Environmental information, responsible operations and our connection with communities.',
      'पर्यावरणीय जानकारी, जिम्मेदार परिचालन और समुदायों के साथ हमारा जुड़ाव।',
    ),
    sections: [
      section(
        'csr',
        'CSR',
        'कॉर्पोरेट सामाजिक उत्तरदायित्व',
        'Access TVNL’s published corporate social responsibility information and community initiatives.',
        'टीवीएनएल की प्रकाशित कॉर्पोरेट सामाजिक उत्तरदायित्व जानकारी और सामुदायिक पहल देखें।',
        'CSR.php',
      ),
      section(
        'environment',
        'Environment',
        'पर्यावरण',
        'Environmental statements and reporting support public access to information about the plant. Ash disposal reports are available through the Info Desk.',
        'पर्यावरणीय विवरण और रिपोर्ट संयंत्र संबंधी जानकारी तक सार्वजनिक पहुँच प्रदान करते हैं। राख निस्तारण रिपोर्ट सूचना डेस्क पर उपलब्ध हैं।',
        'evt.php',
        {
          src: 'assets/stock-solar.jpg',
          alt: pair('Solar panels in a green field', 'हरे मैदान में सौर पैनल'),
          caption: pair(
            'Planned 50 MW solar PV at TTPS — representative image',
            'टीटीपीएस में प्रस्तावित 50 मेगावाट सौर — प्रतिनिधि चित्र',
          ),
        },
      ),
      section(
        'environment-policy',
        'Environment Policy and Management',
        'पर्यावरण नीति और प्रबंधन',
        'Read the published environmental policy and management information for TVNL.',
        'टीवीएनएल की प्रकाशित पर्यावरण नीति और प्रबंधन संबंधी जानकारी पढ़ें।',
        'evp.php',
      ),
      section(
        'safety',
        'Safety',
        'सुरक्षा',
        'Find TVNL’s published safety information and operational guidance.',
        'टीवीएनएल की प्रकाशित सुरक्षा जानकारी और परिचालन मार्गदर्शन देखें।',
        'Safety.php',
        {
          src: 'assets/stock-safety.jpg',
          alt: pair(
            'Worker in high-visibility vest and hard hat',
            'उच्च दृश्यता बनियान और हेलमेट में कर्मचारी',
          ),
          caption: pair(
            'Safety first on site — representative image',
            'साइट पर सुरक्षा सर्वप्रथम — प्रतिनिधि चित्र',
          ),
        },
      ),
    ],
  },
  tenders: {
    title: pair('Tenders', 'निविदाएँ'),
    intro: pair(
      'Find procurement notices and follow their official records for documents, dates and amendments.',
      'खरीद सूचनाएँ खोजें तथा दस्तावेज़ों, तिथियों और संशोधनों के लिए आधिकारिक अभिलेख देखें।',
    ),
    sections: [
      section(
        'tender-notices',
        'Tenders Notices',
        'निविदा सूचनाएँ',
        'All live procurement notices from tvnl.in — search by NIT number or subject, filter by category or financial year. Refer to the official notice for its current status and closing date.',
        'tvnl.in की सभी लाइव खरीद सूचनाएँ — एनआईटी संख्या या विषय से खोजें, श्रेणी या वित्तीय वर्ष से छाँटें। वर्तमान स्थिति और अंतिम तिथि के लिए आधिकारिक सूचना देखें।',
      ),
      section(
        'extensions',
        'Extension Notices',
        'अवधि विस्तार सूचनाएँ',
        'Official bid-deadline extensions for published notices, with previous and revised dates.',
        'प्रकाशित सूचनाओं की बोली-तिथि विस्तार की आधिकारिक सूचनाएँ, पूर्व तथा संशोधित तिथियों सहित।',
      ),
      section(
        'news',
        'News',
        'समाचार',
        'The combined board of TVNL procurement notices — extensions, corrigenda and cancellations.',
        'टीवीएनएल खरीद सूचनाओं का संयुक्त बोर्ड — अवधि विस्तार, शुद्धिपत्र और निरस्तीकरण।',
      ),
      section(
        'corrigenda',
        'Corrigendum Notices',
        'शुद्धिपत्र सूचनाएँ',
        'Published amendments to tender notices.',
        'प्रकाशित निविदा सूचनाओं के संशोधन।',
      ),
      section(
        'cancellations',
        'Cancellation Notices',
        'निरस्तीकरण सूचनाएँ',
        'Published tender cancellation notices.',
        'प्रकाशित निविदा निरस्तीकरण सूचनाएँ।',
      ),
    ],
  },
  notices: {
    title: pair('Notices', 'सूचनाएँ'),
    intro: pair(
      'Public notices, office communications and employment information.',
      'सार्वजनिक सूचनाएँ, कार्यालय संचार और रोजगार संबंधी जानकारी।',
    ),
    sections: [
      section(
        'circulars',
        'Circulars/Office Orders',
        'परिपत्र/कार्यालय आदेश',
        'Read published circulars and office orders.',
        'प्रकाशित परिपत्र और कार्यालय आदेश पढ़ें।',
      ),
      section(
        'updates',
        'Latest Updates',
        'नवीनतम जानकारी',
        'Find the updates published by TVNL through its official channel.',
        'टीवीएनएल के आधिकारिक माध्यम से प्रकाशित नवीनतम जानकारी देखें।',
      ),
      section(
        'public',
        'Public Notices',
        'सार्वजनिक सूचनाएँ',
        'Access notices intended for citizens, suppliers and other stakeholders.',
        'नागरिकों, आपूर्तिकर्ताओं और अन्य हितधारकों के लिए जारी सूचनाएँ देखें।',
      ),
      section(
        'employment',
        'Employment Notices',
        'रोजगार सूचनाएँ',
        'View official recruitment and employment notices, including their eligibility requirements and deadlines.',
        'पात्रता आवश्यकताओं और अंतिम तिथियों सहित आधिकारिक भर्ती तथा रोजगार सूचनाएँ देखें।',
      ),
    ],
  },
  media: {
    title: pair('Media', 'मीडिया'),
    intro: pair(
      'News, images and published stories from TVNL.',
      'टीवीएनएल के समाचार, चित्र और प्रकाशित खबरें।',
    ),
    sections: [
      section(
        'events',
        'News & Events',
        'समाचार और कार्यक्रम',
        'Explore published news and events.',
        'प्रकाशित समाचार और कार्यक्रम देखें।',
        'nwsevnt.php',
      ),
      section(
        'gallery',
        'Photo Gallery',
        'फोटो गैलरी',
        'Tenughat Thermal Power Station, Lalpania, Bokaro. Photographs from TVNL’s official image collection.',
        'तेनुघाट ताप विद्युत केंद्र, ललपनिया, बोकारो। टीवीएनएल के आधिकारिक चित्र संग्रह से तस्वीरें।',
        'pgallry.php',
      ),
      section(
        'videos',
        'Videos',
        'वीडियो',
        'View videos published through the official media section.',
        'आधिकारिक मीडिया अनुभाग में प्रकाशित वीडियो देखें।',
        'vdo.php',
      ),
      section(
        'coverage',
        'Media Coverage',
        'मीडिया कवरेज',
        'Read media coverage listed by TVNL.',
        'टीवीएनएल द्वारा सूचीबद्ध मीडिया कवरेज पढ़ें।',
        'mcv.php',
      ),
    ],
  },
  info: {
    title: pair('Info Desk', 'सूचना डेस्क'),
    intro: pair(
      'A single point of access for reports, formats, careers and public information.',
      'रिपोर्ट, प्रपत्र, करियर और सार्वजनिक जानकारी तक पहुँच का एक स्थान।',
    ),
    sections: [
      section(
        'grievance',
        'Grievance Redressal',
        'शिकायत निवारण',
        'Register a grievance with the company through the public redressal desk.',
        'सार्वजनिक निवारण डेस्क के माध्यम से कंपनी में शिकायत दर्ज करें।',
      ),
      section(
        'ash',
        'Ash Disposal Reports',
        'राख निस्तारण रिपोर्ट',
        'Monthly ash generation and utilisation abstract for Tenughat Thermal Power Station.',
        'तेनुघाट ताप विद्युत केंद्र का मासिक राख उत्पादन एवं उपयोग विवरण।',
      ),
      section(
        'careers',
        'Careers at TVNL',
        'टीवीएनएल में करियर',
        'Find published employment notices and career information. Recruitment terms and dates are specified in each official notice.',
        'प्रकाशित रोजगार सूचनाएँ और करियर संबंधी जानकारी देखें। भर्ती की शर्तें और तिथियाँ प्रत्येक आधिकारिक सूचना में दी जाती हैं।',
      ),
      section(
        'formats',
        'Download Formats',
        'प्रपत्र डाउनलोड करें',
        'Access official downloadable formats.',
        'आधिकारिक डाउनलोड योग्य प्रपत्र देखें।',
      ),
      section(
        'links',
        'Important Links',
        'महत्वपूर्ण लिंक',
        'Official external information channels for electricity regulation and Jharkhand public procurement.',
        'विद्युत विनियमन और झारखंड सार्वजनिक खरीद के आधिकारिक बाहरी सूचना माध्यम।',
      ),
      section(
        'employee-section',
        'Employee Section',
        'कर्मचारी अनुभाग',
        'Access the employee information published by TVNL. The Login section also includes an employee portal demonstration.',
        'टीवीएनएल द्वारा प्रकाशित कर्मचारी जानकारी देखें। लॉगिन अनुभाग में कर्मचारी पोर्टल का प्रदर्शन भी उपलब्ध है।',
      ),
      section(
        'rti',
        'RTI & Public Disclosures',
        'सूचना का अधिकार और सार्वजनिक प्रकटीकरण',
        'Company information, organizational charts, published policies and reports are accessible through this site. Consult TVNL’s official documents for designated officers and RTI procedures.',
        'कंपनी की जानकारी, संगठनात्मक चार्ट, प्रकाशित नीतियाँ और रिपोर्ट इस वेबसाइट पर उपलब्ध हैं। नामित अधिकारियों और सूचना का अधिकार प्रक्रियाओं के लिए टीवीएनएल के आधिकारिक दस्तावेज़ देखें।',
      ),
      section(
        'documents',
        'Documents & Reports',
        'दस्तावेज़ और रिपोर्ट',
        'Browse TVNL’s published documents and reports. For regulatory filings and tariff orders, consult the JSERC TVNL case page.',
        'टीवीएनएल के प्रकाशित दस्तावेज़ और रिपोर्ट देखें। नियामक दाखिलों और टैरिफ आदेशों के लिए जेएसईआरसी का टीवीएनएल पृष्ठ देखें।',
      ),
    ],
  },
  contact: {
    title: pair('Contact us', 'संपर्क करें'),
    intro: pair(
      'Reach the corporate headquarter in Ranchi or the power station in Lalpania.',
      'राँची स्थित कॉर्पोरेट मुख्यालय या ललपनिया स्थित विद्युत केंद्र से संपर्क करें।',
    ),
    sections: [
      section(
        'headquarter',
        'Headquarter',
        'मुख्यालय',
        'JUPMI Building Premises, ABD Area, Ranchi Smart City, P.O. & P.S. Dhurwa, Ranchi, Jharkhand — 834004. Office hours: Monday–Friday, 10:00 AM–6:00 PM.',
        'जुपमी भवन परिसर, एबीडी क्षेत्र, राँची स्मार्ट सिटी, डाकघर एवं थाना धुर्वा, राँची, झारखंड — 834004। कार्यालय समय: सोमवार–शुक्रवार, सुबह 10:00–शाम 6:00 बजे।',
        'hq.php',
      ),
      section(
        'plant',
        'Plant',
        'संयंत्र',
        'Tenughat Thermal Power Station, P.O. T.T.P.S., Lalpania, Bokaro, Jharkhand — 829149. Office hours: Monday–Saturday, 10:00 AM–6:00 PM.',
        'तेनुघाट ताप विद्युत केंद्र, डाकघर टीटीपीएस, ललपनिया, बोकारो, झारखंड — 829149। कार्यालय समय: सोमवार–शनिवार, सुबह 10:00–शाम 6:00 बजे।',
        'Plant.php',
      ),
      section(
        'directory',
        'Directory',
        'निर्देशिका',
        'Consult the official directory for departmental contacts.',
        'विभागीय संपर्क जानकारी के लिए आधिकारिक निर्देशिका देखें।',
        'dir.php',
      ),
    ],
  },
  login: {
    title: pair('Login', 'लॉगिन'),
    intro: pair(
      'Employee, supplier and tender payment services.',
      'कर्मचारी, आपूर्तिकर्ता और निविदा भुगतान सेवाएँ।',
    ),
    sections: [
      section(
        'employee',
        'Employee Login',
        'कर्मचारी लॉगिन',
        'Explore a sample employee workspace.',
        'नमूना कर्मचारी कार्यक्षेत्र देखें।',
      ),
      section(
        'srm',
        'SRM Bidding Portal',
        'एसआरएम बोली पोर्टल',
        'Explore a sample supplier workspace and bid preparation flow.',
        'नमूना आपूर्तिकर्ता कार्यक्षेत्र और बोली तैयारी प्रक्रिया देखें।',
      ),
      section(
        'payment',
        'Tender Payment',
        'निविदा भुगतान',
        'Explore a sample payment review and receipt flow.',
        'नमूना भुगतान समीक्षा और रसीद प्रक्रिया देखें।',
      ),
    ],
  },
}
const tenders = [
  {
    nit: '31/EM-II/P/TVNL/RAN/2025–26',
    category: 'procurement',
    due: '29-12-2025 | 14:00',
    title:
      'Supply, Installation, Retrofitting and Commissioning of Bus Bar Numerical Relay Protection System for 14 Running Bays and Central Unit having provision for 06 future bays at T.T.P.S. Lalpania, Bokaro, Jharkhand',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_31_em_ii_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_31_em_ii_tvnl_ran_2526_notc.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/171225_extnsn_notc_nit_31_em_ii_2526.pdf',
      },
    ],
  },
  {
    nit: '30/C&I-II/P/TVNL/RAN/2025–26',
    category: 'procurement',
    due: '19-12-2025 | 14:00',
    title:
      'Supply of clamp on ultrasonic flowmeter and its accessories including engineering, assembly, integration, installation & commissioning & site testing of CW pumps of 1600mm Dia, flow rate 16000M3/HR, line pressure 2 KG/Cm2 & medium raw water as well as data transmission with remote terminal unit for cloud connectivity including water balancing dashboard on existing cloud at TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_30_cni_ii_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_30_cni_ii_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '32/IT/W/TVNL/RAN/2025-26',
    category: 'it',
    due: '24-12-2025 | 14:00',
    title:
      'AMC for maintenance of computer & its peripherals, networking & its devices, Biometric machines & CCTV cameras installed in the offices of TTPS, Lalpania for two years.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_32_it_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_32_it_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '33/EM-II/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '06-01-2026 | 14:00',
    title:
      'AMC of O&M for two shifts (morning & evening shift) of Reception building & Service building Lift in Power House at T.T.P.S. Lalpania for 02 (Two) Years',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_33_em_ii_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_33_em_ii_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '34/EM-II/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '06-01-2026 | 14:00',
    title:
      'Annual contract for operation & maintenance work of Hydrogen Generation plant at TTPS Lalpania for 02 (Two) Years',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_34_em_ii_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_no_34_em_ii_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '35/EM-II/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '06-01-2026 | 14:00',
    title:
      'Annual Maintenance Contract for all electrical systems of HT/LT lines and equipment of 33/11/6.6 KV Substation and lighting installations of powerhouse and colony for two years at TTPS Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_35_em_ii_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_35_em_ii_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '24/CHP-I/W/TVNL/RAN/ 2025-26 (GEM/2025/B/6689546)',
    category: 'coal',
    due: '17-11-2025 | 13:00',
    title:
      'Unloading of coal from BOBR wagons, total 500 nos. coal rakes along with other associated works of Track Hopper at CHP-I, TTPS, Lalpania.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/241025_doc_nit_no-1021.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/241025_notc_nit_no-1021.pdf',
      },
    ],
  },
  {
    nit: '25/CIVIL/W/TVNL/RAN/2025-26',
    category: 'coal',
    due: '31-10-2025 | 14:00',
    title:
      'Work of evacuation and nuisance free transportation of pond ash from TTPS to NHAI project in the lead 18-30 KM for usage in NHAI 6 lane green field Highway project (PKG-12) uner Bharatmala Pariyojana in the state of Jharkhand',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/301025_notc_nit_no_1044.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/301025_notc_nit_no_1044.pdf',
      },
    ],
  },
  {
    nit: '21/BMD/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '05-12-2025 | 14:00',
    title:
      'Reconditioning of PA Fan Impeller and shaft (Model No. NDZV 20 H) at TTPS Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_21_bmd_w_tvnl_ran_2526_doc.pdf',
      },
    ],
  },
  {
    nit: '39/OPERATION/P/TVNL/RAN/2025-26',
    category: 'coal',
    due: '27-04-2026 | 14:00',
    title:
      'Supply and application of 81000Kg. of coal additive “Thermact” for unit-1&2 at TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/39_operation_p_tvnl_ran_2526_doc_nw_tvnl.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/2603_26_39_operation_p_tvnl_ran_2526_extnsn.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/2603_26_39_operation_p_tvnl_ran_2526_extnsn.pdf',
      },
    ],
  },
  {
    nit: '49/CIVIL/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '02-04-2026 | 14:00',
    title:
      'For the work of repair and maintenance of (Bituminous carpeting over the surface) of the existing road from "TTPS Plant Main Gate via Diesel Pump House road in front of ETP to Compressor House via Canteen more & canteen more to crossing just after CHP control room building via CHP more inside Power House at TTPS Lalpania"',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/49_civil_w_tvnl_ran_2526_notc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/49_civil_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '29/HR/W/TVNL/RAN/2025– 26',
    category: 'works',
    due: '14-05-2026 | 12:00',
    title: 'Selection of Govt. agency for recruitment of executives in TVNL',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_29_hr_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/e-tender_extension_notices.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/090426_ltr_33_2627_extnsn_notc_nit_29_tvnl.pdf',
      },
    ],
  },
  {
    nit: '42/BMD/P/TVNL/RAN/2025-2026',
    category: 'procurement',
    due: '28-05-2026 | 14:00',
    title: 'Procurement of Cold end baskets for APH of Unit No. I',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_42_bmd_p_tvnl_ran_2526_doc_nw.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/090426_nit_42_extnsn_notc__nit_42_2627.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/090426_nit_42_extnsn_notc__nit_42_2627.pdf',
      },
    ],
  },
  {
    nit: '43/BMD/P/TVNL/RAN/2025-2026',
    category: 'procurement',
    due: '02-04-2026 | 14:00',
    title:
      'Procurement of Screw Conveyor Assembly (DE&NDE side) of Mill-BBD4760BIS',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_43_bmd_p_tvnl_ran_2526_doc.pdf',
      },
    ],
  },
  {
    nit: '40/Coal Block/W/TVNL/RAN/2025-26',
    category: 'coal',
    due: '06-04-2026 | 14:00',
    title:
      'Engagement of consultant for the work of preparation of Feasibility Study Report (FSR), Detailed Project Report (DPR) & Engineering Scale Plan (ESP) for construction of Permanent Railway Siding at CHP area of Rajbar E&D coal block, Dist. Latehar, Jharkhand',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_40_coal_block_w_tvnl_ran_2526_doc.pdf',
      },
    ],
  },
  {
    nit: '36/EM-II/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '06-01-2026 | 14:00',
    title:
      'Annual contract for operation & maintenance work of all electrical equipments of GCR, PLCC system and 220kV/400kV S/Y for 02(Two) Years at TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_36_em_ii_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_36_em_ii_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '28/BMD/W/TVNL/RAN/2025-26',
    category: 'coal',
    due: '09-01-2026 | 14:00',
    title:
      'Annual Rate Contract for 02 (Two) years and annual overhauling of Mills BBD 4760 BIS, Raw Coal Feeders, Classifiers etc of Unit-1&2 of TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_28_bmd_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/241225_cancl_notc__nit_28_bmd_2526.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/241225_cancl_notc__nit_28_bmd_2526.pdf',
      },
    ],
  },
  {
    nit: '37/C&I-I/P/TVNL/RAN/2025–26',
    category: 'procurement',
    due: '19-02-2026 | 14:00',
    title:
      'Supply and commissioning of H2 Purity Analyzer set of Purity Panel for Unit #2 at TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/37_candi_i_p_tvnl_ran_2025_26_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/090226_extnsn_notc_nit_37_cni_2526.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/090226_extnsn_notc_nit_37_cni_2526.pdf',
      },
    ],
  },
  {
    nit: '38/Store/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '21-01-2026 | 14:00',
    title:
      'AMC of Maintaining adequate stock of filled Hydrogen gas cylinders in T. G. Hall. Unloading of bulk chemicals & lubricant drums & stacking inside shed, periodical cleaning of Store sheds with brooms for two years',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_38_store_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_38_store_w_tvnl_ran_2526_notc.pdf',
      },
    ],
  },
  {
    nit: '45/BMD/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '17-04-2026 | 14:00',
    title:
      '1. Annual Rate Contract for Boiler Pressure Parts & H.P. Valves of Boiler of Unit No. 1 & 2 at TTPS, Lalpania for the period of two years. 2. Annual Rate Contract for APH, Scanner Fan, Dampers and Gates of Boiler of Unit No. 1 & 2 for the period of two years.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_45_bmd_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/080426_memo_no_29_2627_cancl_notc_tvnl.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/080426_memo_no_29_2627_cancl_notc_tvnl.pdf',
      },
    ],
  },
  {
    nit: '05/CIVIL/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '18-05-2026 | 16:00',
    title:
      'Supply, installation and commissioning of one PITLESS type, road Weighbridge of capacity 100MT, size 16mX3.5m along with complete civil works and comprehensive annual maintenance for 03 years at TTPS Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_05_civil_w_tvnl_ran_2627_docnw.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_05_civil_w_tvnl_ran_2627_notc.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/nit_05_extnsn_notc_127_tvnl_2627.pdf',
      },
    ],
  },
  {
    nit: '08/OP/P/TVNL/RAN/2026-27',
    category: 'procurement',
    due: '12-06-2026 | 14:00',
    title:
      'Supply of 110 MT of Caustic Soda Lye (100% basis). Specification: Pure / Rayon grade Confirming to IS No: 252-1991/1973 (3rd Revision) & Reaffirmed 1996 with Concentration: 46% to 48% (100% equivalent NaOH) basis.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/tender_documents_13052026.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/tender_extension_notics_04062026.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/tender_extension_notics_04062026.pdf',
      },
    ],
  },
  {
    nit: '06/TM/P/TVNL/RAN/26-27',
    category: 'procurement',
    due: '23-06-2026 | 13:00',
    title:
      'Annual maintenance contract (AMC) for running maintenance and short breakdown maintenance works in Turbine & its auxiliaries of 2×210MW units at TTPS, Lalpania for two-year period.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/tender-document-27052026.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/e-tender-notice-27052026.pdf',
      },
    ],
  },
  {
    nit: '07/C&I-I/W/TVNL/RAN/2026-27',
    category: 'it',
    due: '25-06-2026 | 14:00',
    title:
      'AMC (Annual Maintenance Contract) of workstation/Engineering station, CPUs, Network switches, systems of DCS Valmet DNA HMI system of Unit #1 & 2 and AMC of workstation/Engineering station, CPUs and Network switches of PLC of SILO and other related work at TTPS Lalpania.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/tender_documents_13062026.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/e_tender_notices_13062026.pdf',
      },
    ],
  },
  {
    nit: '50/EM-I/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '17-04-2026 | 14:00',
    title:
      'Annual Operation and Maintenance including minor Overhauling of Air–Conditioning Plants of 2x210MW Units for one year at TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_50_em_i_w_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_50_em_i_w_tvnl_ran_2526_notc.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/cancellation_notice_04082026.pdf',
      },
    ],
  },
  {
    nit: '51/Civil/W/TVNL/RAN/2025-26',
    category: 'coal',
    due: '16-04-2026 | 16:00',
    title:
      'For the work of evacuation of ash from Ash Pond of TTPS, its nuisance-free transportation & disposal in defined areas provided by the Plant',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/doc-51_civil_w_tvnl_ran_2526_notc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/notice-51_civil_w_tvnl_ran_2526_notc.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/30_03_26_crgdm_notc_nit_51.pdf',
      },
    ],
  },
  {
    nit: '46/OP/P/TVNL/RAN/2025-26',
    category: 'procurement',
    due: '20-04-2026 | 14:00',
    title:
      'Supply of annual requirement of 200MT of Ferric Alum, grade IV confirming to IS:299/2012, 5th revision at TTPS, Lalpania as per site requirement within one year',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_46_op_p_tvnl_ran_2526_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/e-tender-ex-not_46.pdf',
      },
      {
        label: 'Bid URL',
        href: 'content/documents/tenders/e-tender-ex-not_46.pdf',
      },
    ],
  },
  {
    nit: '31/CIVIL/W/TVNL/RAN/2026-27',
    category: 'coal',
    due: '02-09-2026 | 16:00',
    title:
      'For the Work of evacuation and nuisance free transportation of pond ash from TTPS to NHAI project in the lead 20-50 KM for usage in NHAI 6 lane green field Highway project (PKG-12) under Bharatmala Pariyojana in the state Jharkhand',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_31_civil_w_tvnl_ran_2627_notc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_31_civil_w_tvnl_ran_2627_notc.pdf',
      },
    ],
  },
  {
    nit: '34/EM-I/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '08-09-2026 | 14:00',
    title:
      'Annual Operation and Maintenance including minor Overhauling of Air–Conditioning Plants of 2x210MW Units for one year at TTPS, Lalpania.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/tender_document_18082026.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/tender_notices_18082026.pdf',
      },
    ],
  },
  {
    nit: '29/BMD/W/TVNL/RAN/2026-27',
    category: 'coal',
    due: '14-09-2026 | 14:00',
    title:
      'Annual Rate Contract for 02 (Two) years and annual overhauling of Mills BBD 4760 BIS, Raw Coal Feeders, Classifiers etc of Unit-1&2 of TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_29_bmd_w_tvnl_ran_2627_boq_nw.pdf',
      },
    ],
  },
  {
    nit: '30/BMD/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '14-09-2026 | 14:00',
    title:
      '1. Annual Rate Contract for Boiler Pressure Parts & H.P. Valves of Boiler of Unit No. 1 & 2 at TTPS, Lalpania for the period of two years. 2. Annual Rate Contract for APH, Scanner Fan, Dampers and Gates of Boiler of Unit No. 1 & 2 for the period of two years.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_30_bmd_w_tvnl_ran_2627_boq_nw.pdf',
      },
    ],
  },
  {
    nit: '35/EM-II/P/TVNL/RAN/2026–27',
    category: 'procurement',
    due: '18-09-2026 | 14:00',
    title:
      'Procurement of spares of battery chargers (Main 1, Main 2 and standby) in GCR at TTPS, Lalpania.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/tender_document_27082026.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/tender_notice_27082026.pdf',
      },
    ],
  },
  {
    nit: '27/BMD/W/TVNL/RAN/2025-26',
    category: 'works',
    due: '24-09-2026 | 14:00',
    title:
      'ANNUAL RATE CONTRACT for the two years and annual O/H of Boiler rotary equipment’s (FD Fans, ID Fans, PA Fans & Seal Air Fans) of Unit-1&2',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/boq_nit_27_03092026_1.pdf',
      },
    ],
  },
  {
    nit: '01/CIVIL/W/TVNL/RAN/2026-27',
    category: 'coal',
    due: '30-07-2026 | 16:00',
    title:
      'Obehalf of TVNL, EOI is invited for Pond Ash/Dry Ash (Silo System) on subsidy from ash pond of TTPS, Lalpania on as is where is basis with end uses in India in environment friendly manners as per schedule given below:',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/eoi_notices_25062026.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/eoi_notices_25062026.pdf',
      },
    ],
  },
  {
    nit: '24/Fire & Safety/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '15-07-2026 | 12:00',
    title:
      'Open Tender for Standard Fire and Special Perils Policy with STFI Cover for Tenughat Thermal Power Station at Lalpania, Bokaro',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_24_fire_safety_w_tvnl_ran_2627_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_no_24_fire_safety_w_tvnl_ran_2627_notc.pdf',
      },
    ],
  },
  {
    nit: '26/EM-I/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '29-07-2026 | 14:00',
    title:
      'Annual Maintenance Contract of all Electrical Systems of TG & TG Auxiliaries, Boiler & Boiler Auxiliaries, Common Facility Area, Silo & ETP area and Deployment of 8 (eight) nos. of Technician in Operation (shift) duty of 2x210 MW units at Tenughat Thermal Power Station, Lalpania for 01 (One) Year',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_no_26_i_em_i_w_tvnl_ran_2627_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_no_26_i_em_i_w_tvnl_ran_2627_notc.pdf',
      },
    ],
  },
  {
    nit: '03/EMG/W/TVNL/RAN/26-27',
    category: 'works',
    due: '11-08-2026 | 14:00',
    title:
      'Engagement of NABL accredited agency for the work of monitoring and testing of environmental parameters and preparation of environmental statements of TTPS, Lalpania',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_03_emg_w_tvnl_ran_2627_doc.pdf',
      },
      {
        label: 'Notice',
        href: 'content/documents/tenders/nit_03_emg_w_tvnl_ran_2627_notc.pdf',
      },
    ],
  },
  {
    nit: '28/BMD/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '24-09-2026 | 14:00',
    title:
      'Annual Rate Contract for 02 (Two) years and annual overhauling of ESP Unit No.1&2 of TTPS, Lalpania.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/boq_nit_28_03092026_2.pdf',
      },
    ],
  },
  {
    nit: '25/C&I/W/TVNL/RAN/2026-27',
    category: 'works',
    due: '24-09-2026 | 14:00',
    title:
      'Preventive, breakdown and round the clock running maintenance of field and secondary instruments of both the units of 2x210 MW, TTPS Lalpania for 02 (two) years.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/nit_tender_amc_08092026.pdf',
      },
    ],
  },
  {
    nit: '32/BMD/P/TVNL/RAN/2026-27',
    category: 'procurement',
    due: '06-10-2026 | 14:00',
    title:
      'Procurement of 4-bodied HP Pump Model-L 4 H10 FOR 10473 Make-L&T for old lub oil system of mill BBD4760BIS at TTPS, Lalpania.',
    links: [
      {
        label: 'Document',
        href: 'content/documents/tenders/tender_not_document_11092026.pdf',
      },
    ],
  },
]
const notices = [
  {
    type: 'extension',
    nit: '08/OP/P/TVNL/RAN/2026-27',
    subject:
      'Supply of 110 MT of Caustic Soda Lye (100% basis). Specification: Pure / Rayon grade Confirming to IS No: 252-1991/1973 (3rd Revision) & Reaffirmed 1996 with Concentration: 46% to 48% (100% equivalent NaOH) basis.',
    prev: '04-06-2026 | 14:00 Hrs',
    rev: '12-06-2026 | 14:00 Hrs',
    doc: 'content/documents/tenders/tender_extension_notics_04062026.pdf',
  },
  {
    type: 'extension',
    nit: '42/BMD/P/TVNL/RAN/2025-2026',
    subject: 'Procurement of Cold end baskets for APH of Unit No. I',
    prev: '22-04-2026 | 14:00 Hrs',
    rev: '28-05-2026 | 14:00 Hrs',
    doc: 'content/documents/notices/e_tender_extension_notice_22052026.pdf',
  },
  {
    type: 'extension',
    nit: '05/CIVIL/W/TVNL/RAN/2026-27',
    subject:
      'Supply, installation and commissioning of one PITLESS type, road Weighbridge of capacity 100MT, size 16mX3.5m along with complete civil works and comprehensive annual maintenance for 03 years at TTPS Lalpania',
    prev: '07-05-2026 | 16:00 Hrs',
    rev: '18-05-2026 | 16:00 Hrs',
    doc: 'content/documents/tenders/nit_05_extnsn_notc_127_tvnl_2627.pdf',
  },
  {
    type: 'extension',
    nit: '29/HR/W/TVNL/RAN/2025– 26',
    subject: 'Selection of Govt. agency for recruitment of executives in TVNL',
    prev: '24-04-2026 | 12:00 Hrs',
    rev: '14-05-2026 | 12:00 Hrs',
    doc: 'content/documents/tenders/e-tender_extension_notices.pdf',
  },
  {
    type: 'extension',
    nit: '42/BMD/P/TVNL/RAN/2025-2026',
    subject: 'Procurement of Cold end baskets for APH of Unit No. I',
    prev: '13-04-2026 | 14:00 Hrs',
    rev: '22-04-2026 | 14:00 Hrs',
    doc: 'content/documents/notices/e-tender-ex-not.pdf',
  },
  {
    type: 'extension',
    nit: '39/OPERATION/P/TVNL/RAN/2025-26',
    subject:
      'Supply and application of 81000Kg. of coal additive “Thermact” for unit-1&2 at TTPS, Lalpania',
    prev: '27-04-2026 | 14:00 Hrs',
    rev: '27-04-2026 | 16:00 Hrs',
    doc: 'content/documents/notices/e-tender-ex-not39.pdf',
  },
  {
    type: 'extension',
    nit: '46/OP/P/TVNL/RAN/2025-26',
    subject:
      'Supply of annual requirement of 200MT of Ferric Alum, grade IV confirming to IS:299/2012, 5th revision at TTPS, Lalpania as per site requirement within one year',
    prev: '20-04-2026 | 14:00 Hrs',
    rev: '20-04-2026 | 16:00 Hrs',
    doc: 'content/documents/tenders/e-tender-ex-not_46.pdf',
  },
  {
    type: 'extension',
    nit: '29/HR/W/TVNL/RAN/2025– 26',
    subject: 'Selection of Govt. agency for recruitment of executives in TVNL',
    prev: '02-04-2026 | 12:00 Hrs',
    rev: '24-04-2026 | 12:00 Hrs',
    doc: 'content/documents/tenders/090426_ltr_33_2627_extnsn_notc_nit_29_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '42/BMD/P/TVNL/RAN/2025-2026',
    subject: 'Procurement of Cold end baskets for APH of Unit No. I',
    prev: '02-04-2026 | 14:00 Hrs',
    rev: '13-04-2026 | 14:00 Hrs',
    doc: 'content/documents/tenders/090426_nit_42_extnsn_notc__nit_42_2627.pdf',
  },
  {
    type: 'extension',
    nit: '39/OPERATION/P/TVNL/RAN/2025-26',
    subject:
      'Supply and application of 81000Kg. of coal additive “Thermact” for unit-1&2 at TTPS, Lalpania',
    prev: '20-03-2026 | 14:00 Hrs',
    rev: '08-04-2026 | 14:00 Hrs',
    doc: 'content/documents/tenders/2603_26_39_operation_p_tvnl_ran_2526_extnsn.pdf',
  },
  {
    type: 'extension',
    nit: '37/C&I-I/P/TVNL/RAN/2025–26',
    subject:
      'Supply and commissioning of H2 Purity Analyzer set of Purity Panel for Unit #2 at TTPS, Lalpania',
    prev: '16-01-2026 | 14:00 Hrs',
    rev: '19-02-2026 | 14:00 Hrs',
    doc: 'content/documents/tenders/090226_extnsn_notc_nit_37_cni_2526.pdf',
  },
  {
    type: 'extension',
    nit: '01/TTPS/TTPS/Contract/400007121/MTP/2025-26',
    subject:
      'Work of pre-dispatch inspection at supplier’s works for critical and high value spares being supplied & preparation of MQP & FQP at TTPS, Lalpania.',
    prev: '25-11-2025 | 17:00 Hrs',
    rev: '25-01-2026 | 17:00 Hrs',
    doc: 'content/documents/notices/291225_nit extnsn_notc_nit_01_contracts.pdf',
  },
  {
    type: 'extension',
    nit: '26/ HR/W /TVNL/RAN/2025-26',
    subject:
      'Short e-tender for engagement of Goverment recruitment agency for filling internal vacancy of TVNL',
    prev: '23-12-2025 | 12:00 Hrs',
    rev: '07-01-2026 | 12:00 Hrs',
    doc: 'content/documents/notices/261225_2nd_extnsn_notc _nit_26_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '31/EM-II/P/TVNL/RAN/2025–26',
    subject:
      'Supply, Installation, Retrofitting and Commissioning of Bus Bar Numerical Relay Protection System for 14 Running Bays and Central Unit having provision for 06 future bays at T.T.P.S. Lalpania, Bokaro, Jharkhand',
    prev: '16-12-2025 | 14:00 Hrs',
    rev: '29-12-2025 | 14:00 Hrs',
    doc: 'content/documents/tenders/171225_extnsn_notc_nit_31_em_ii_2526.pdf',
  },
  {
    type: 'extension',
    nit: '26/ HR/W /TVNL/RAN/2025-26',
    subject:
      'Short e-tender for engagement of Goverment recruitment agency for filling internal vacancy of TVNL',
    prev: '10-11-2025 | 12:00 Hrs',
    rev: '23-12-2025 | 12:00 Hrs',
    doc: 'content/documents/notices/011225_extns_notc_nit_26_hr_2526_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: 'NIT NO- 27/COMM./W/TVNL/RAN/2025–26',
    subject:
      'Consultancy Services for drafting Business Plan & Multi Year Tariff Petition (MYT) and Year wise True -up Petition for the Fourth Control Period FY 2026-27 to FY 2030-31 of 2x210 MW Tenughat TPS.',
    prev: '07-11-2025 | 14:00 Hrs',
    rev: '18-11-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/071125_extnsn_notc_nit_27_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '01/TTPS/TTPS/Contract/400007121/MTP/2025-26',
    subject:
      'Work of pre-dispatch inspection at supplier’s works for critical and high value spares being supplied & preparation of MQP & FQP at TTPS, Lalpania.',
    prev: '05-09-2025 | 17:00 Hrs',
    rev: '25-11-2025 | 17:00 Hrs',
    doc: 'content/documents/notices/01_11_25_tvnl_extnsion_nit.pdf',
  },
  {
    type: 'extension',
    nit: '25/CIVIL/W/TVNL/RAN/2025-26',
    subject:
      'Work of excavation and nuisance free transportation of pond ash from TTPS to NHAI project in the lead 18-30 KM for usage in NHAI 6 lane green field Highway project (PKG-12) under Bharatmala Pariyojana in the state of Jharkhand.',
    prev: '16-10-2025 | 16:00 Hrs',
    rev: '31-10-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/151025_nit_extnsn_notc_civil_time.pdf',
  },
  {
    type: 'extension',
    nit: '14/EM-I/P/TVNL/RAN/2025–26',
    subject:
      'Procurement of LT Motor for Hydrant Water Pump-2, (155KW), 1485RPM, frame-D315L, mountingfoot type,267AMP,3Phase,415V,50HZ, IP=55, Cooling=IC411 Type=IE3, Make-Marathon electric in common facility area.',
    prev: '12-09-2025 | 14:00 Hrs',
    rev: '25-09-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/2_tndr_extnsn_1_11928 _1_11336.pdf',
  },
  {
    type: 'extension',
    nit: '13/IT/W/TVNL/RAN/2025-26',
    subject:
      'Supply of Services of Comprehensive AMC for complete Blade Server Infrastructure, SAN Switch & SAN Storage, Tape Library, Data Protector, Core Switch for one year at TTPS, Lalpania.',
    prev: '12-09-2025 | 14:00 Hrs',
    rev: '25-09-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/2_tndr_extnsn_1_11928 _1_11336.pdf',
  },
  {
    type: 'extension',
    nit: '13/IT/W/TVNL/RAN/2025-26',
    subject:
      'Supply of Services of Comprehensive AMC for complete Blade Server Infrastructure, SAN Switch & SAN Storage, Tape Library, Data Protector, Core Switch for one year at TTPS, Lalpania.',
    prev: '20-08-2025 | 14:00 Hrs',
    rev: '12-09-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/020925_nit_13_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: '14/EM-I/P/TVNL/RAN/2025–26',
    subject:
      'Procurement of LT Motor for Hydrant Water Pump-2, (155KW), 1485RPM, frame-D315L, mountingfoot type,267AMP,3Phase,415V,50HZ, IP=55, Cooling=IC411 Type=IE3, Make-Marathon electric in common facility area.',
    prev: '20-08-2025 | 14:00 Hrs',
    rev: '12-09-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/020925_nit_14_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: '08/TM/P/TVNL/RAN/25-26 (GEM Tender No. GEM/2025/B/6268604)',
    subject:
      'Supply, erection & commissioning of 750 KVA DG SET along with AMF Panels for Unit#1 at TTPS Lalpania',
    prev: '04-08-2025 | 13:00 Hrs',
    rev: '28-08-2025 | 13:00 Hrs',
    doc: 'content/documents/notices/110825_2nd_extnsn_notc_nit_8_dg_2526.pdf',
  },
  {
    type: 'extension',
    nit: '07/CIVIL/W/TVNL/RAN/2025-26',
    subject:
      'Lifting and Transportation of pond ash/fly ash/conditioned ash from Ash Pond/TTPS Silo through Rail mode or by Road mode through Bulkers for end uses in India with subsidy',
    prev: '28-07-2025 | 14:00 Hrs',
    rev: '26-08-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/070825_nit_extnsn_notc_civil2526.pdf',
  },
  {
    type: 'extension',
    nit: '02/Solar/EPC/TVNL/RAN/2025-26',
    subject:
      'Selection of EPC Contractor for setting up of 50 MW (AC) Solar Photovoltaic Grid-Connected Power Plants at TTPS, Lalpania, Bokaro on Turnkey basis and its 10 (5+5) Years Comprehensive operation and Maintenance',
    prev: '23-07-2025 | 13:00 Hrs',
    rev: '26-08-2025 | 13:00 Hrs',
    doc: 'content/documents/notices/240725_tndr_extnsn_nit_02_solar_2526.pdf',
  },
  {
    type: 'extension',
    nit: '08/TM/P/TVNL/RAN/25-26 (GEM Tender No. GEM/2025/B/6268604)',
    subject:
      'Supply, erection & commissioning of 750 KVA DG SET along with AMF Panels for Unit#1 at TTPS Lalpania',
    prev: '17-07-2025 | 13:00 Hrs',
    rev: '04-08-2025 | 13:00 Hrs',
    doc: 'content/documents/notices/230725_extnsn_notc1_nit_08_2526.pdf',
  },
  {
    type: 'extension',
    nit: '07/CIVIL/W/TVNL/RAN/2025-26',
    subject:
      'Lifting and Transportation of pond ash/fly ash/conditioned ash from Ash Pond/TTPS Silo through Rail mode or by Road mode through Bulkers for end uses in India with subsidy',
    prev: '04-07-2025 | 14:00 Hrs',
    rev: '28-07-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/170725_extnsn_notc_nit_07_civil_memo_no_529_2526.pdf',
  },
  {
    type: 'extension',
    nit: '02/Solar/EPC/TVNL/RAN/2025-26',
    subject:
      'Selection of EPC Contractor for setting up of 50 MW (AC) Solar Photovoltaic Grid-Connected Power Plants at TTPS, Lalpania, Bokaro on Turnkey basis and its 10 (5+5) Years Comprehensive operation and Maintenance',
    prev: '02-07-2025 | 13:00 Hrs',
    rev: '23-07-2025 | 13:00 Hrs',
    doc: 'content/documents/notices/030725_tndr_extnsn_nit_02_2526.pdf',
  },
  {
    type: 'extension',
    nit: '05/BMD/P/TVNL/RAN/2024-25',
    subject:
      'Procurement of stainless-steel coal inlet pipe for MILL BBD4760 BIS',
    prev: '24-06-2025 | 14:00 Hrs',
    rev: '27-06-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/260625_extnsn_notc_nit_05_2425.pdf',
  },
  {
    type: 'extension',
    nit: '02/Solar/EPC/TVNL/RAN/2025-26',
    subject:
      'Selection of EPC Contractor for setting up of 50 MW (AC) Solar Photovoltaic Grid-Connected Power Plants at TTPS, Lalpania, Bokaro on Turnkey basis and its 10 (5+5) Years Comprehensive operation and Maintenance',
    prev: '11-06-2025 | 13:00 Hrs',
    rev: '02-07-2025 | 13:00 Hrs',
    doc: 'content/documents/notices/120625_nit_no_02_solar_epc_tvnl_ran_2526_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: '05/BMD/P/TVNL/RAN/2024-25',
    subject:
      'Procurement of stainless-steel coal inlet pipe for MILL BBD4760 BIS',
    prev: '12-03-2025 | 14:00 Hrs',
    rev: '24-06-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/nit_no_05_bmd_p_tvnl_ran_2425_290525.pdf',
  },
  {
    type: 'extension',
    nit: '01/ COMM./W/TVNL/RAN/2025-26',
    subject:
      'Consultancy Services for preparation of Year wise True-up Petition for Third Control Period FY 2021-22 to FY 2025-26 of 2x210 MW Tenughat TPS.',
    prev: '09-05-2025 | 14:00 Hrs',
    rev: '27-05-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/13_05_2025_nit_01_comm_w_tvnl_ran_2526_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: '01/ COMM./W/TVNL/RAN/2025-26',
    subject:
      'Consultancy Services for preparation of Year wise True-up Petition for Third Control Period FY 2021-22 to FY 2025-26 of 2x210 MW Tenughat TPS.',
    prev: '23-04-2025 | 14:00 Hrs',
    rev: '09-05-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/02_05_2025_nit_01_comm_w_tvnl_ran_2526_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: '39/CIVIL/W/TVNL/RAN/2024-25',
    subject:
      'Supply of one rake of stone Ballast (2100.00 M3) as per latest RDSO specification including spreading and packing for Rail line between Dumri Bihar railway siding and Tenughat TPS siding',
    prev: '17-04-2025 | 14:00 Hrs',
    rev: '13-05-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/250425_nit_no_39_civil_w_tvnl_ran_2425_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: '38/CIVIL/W/TVNL/RAN/2024-25',
    subject:
      'For the work of evacuation of ash from Ash Pond of TTPS, its nuisance free transportation & disposal in defined areas provided by the plant .',
    prev: '01-04-2025 | 16:00 Hrs',
    rev: '11-04-2025 | 16:00 Hrs',
    doc: 'content/documents/notices/24_03_25_ltr_no_1645_ext_nit_38_civil_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '20/BMD/P/TVNL/RAN/2024-25',
    subject:
      'Procurement of SKY climber assy. with associated fittings including platform, motor, hoist etc. (complete set) for boiler of unit #1&2. Make: N.V.SKY CLEMBER S.A. EUROPE',
    prev: '18-10-2024 | 14:00 Hrs',
    rev: '14-02-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/doc01300320250131202406.pdf',
  },
  {
    type: 'extension',
    nit: '22/IT/W/TVNL/RAN/2024-25',
    subject:
      'Upgradation of Sybase database & patches and kernel of SAP SRM (Supplier Relationship Management) System with Enhancements and Developments to include new features in SRM as described in the scope of works.',
    prev: '13-12-2024 | 14:00 Hrs',
    rev: '10-01-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/3rd_extnsn_notc_nit_22_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '30/EM-II/P/TVNL/RAN/2024–25',
    subject:
      'Supply, Erection and commissioning of Thyristor controlled Rectifier for Hydrogen generation plant at TTPS Lalpania',
    prev: '13-12-2024 | 14:00 Hrs',
    rev: '09-01-2025 | 14:00 Hrs',
    doc: 'content/documents/notices/301224_extnsn_notc_nit_30_2425_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '22/IT/W/TVNL/RAN/2024-25',
    subject:
      'Upgradation of Sybase database & patches and kernel of SAP SRM (Supplier Relationship Management) System with Enhancements and Developments to include new features in SRM as described in the scope of works.',
    prev: '25-10-2024 | 14:00 Hrs',
    rev: '13-12-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/021224_2nd_tndr_extnsn_nit_22_it_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '29/EM-I/W/TVNL/RAN/2024-25',
    subject:
      'Annual Maintenance Contract of all Electrical Systems of TG & TG Auxiliaries, Boiler & Boiler Auxiliaries, Common Facility Area and Deployment of 8 (eight) nos. of Technician in Operation (shift) duty of 2x210 MW units at Tenughat Thermal Power Station, Lalpania for 01 (One) Year',
    prev: '29-10-2024 | 14:00 Hrs',
    rev: '13-12-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/021224_extnsn_notc_nit_29_30_2425_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '30/EM-II/P/TVNL/RAN/2024–25',
    subject:
      'Supply, Erection and commissioning of Thyristor controlled Rectifier for Hydrogen generation plant at TTPS Lalpania',
    prev: '29-10-2024 | 14:00 Hrs',
    rev: '13-12-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/021224_extnsn_notc_nit_29_30_2425_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '031/OP/P/TVNL/RAN/2024-25',
    subject: 'Supply and Application of Coal Additive',
    prev: '26-11-2024 | 14:00 Hrs',
    rev: '10-12-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/021224_extnsn_notc_nit_031_2425.pdf',
  },
  {
    type: 'extension',
    nit: '031/OP/P/TVNL/RAN/2024-25',
    subject: 'Supply and Application of Coal Additive',
    prev: '12-11-2024 | 14:00 Hrs',
    rev: '26-11-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/181124_nit_031_extnsn_notc_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '21/C&I/W/TVNL/RAN/2024-25',
    subject:
      'Round the clock Operation & Maintenance work of all field instruments and secondary instruments of C&I circle of 2*210 MW Units at TTPS, Lalpania for 1(one) year',
    prev: '04-10-2024 | 14:00 Hrs',
    rev: '25-10-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/141024_nit_21_cni_2425_ext_notc.pdf',
  },
  {
    type: 'extension',
    nit: '22/IT/W/TVNL/RAN/2024-25',
    subject:
      'Upgradation of Sybase database & patches and kernel of SAP SRM (Supplier Relationship Management) System with Enhancements and Developments to include new features in SRM as described in the scope of works.',
    prev: '04-10-2024 | 14:00 Hrs',
    rev: '25-10-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/141024_nit_no_22_it_2425_extnsn_notc.pdf',
  },
  {
    type: 'extension',
    nit: 'EOI No. 12/CIVIL/W/TVNL/RAN/2024-25',
    subject:
      'Invitation for Expression of Interest (EOI) for Invitation for collection and sale of Cenosphere from Tenughat TPS ash pond “as is where is basis”',
    prev: '08-07-2024 | 14:00 Hrs',
    rev: '22-07-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/ext-100724_crgdm_date_extnsn_nit_12_cvl.pdf',
  },
  {
    type: 'extension',
    nit: '06/EM-1/P/TVNL/RAN/2024–25',
    subject:
      'Procurement of `Nirmal` mobile type transformer oil filtration machine capacity-6000 LPH under EM-1 circle at TTPS, Lalpania. Make-Fowler Westrup India Pvt. Limited',
    prev: '28-06-2024 | 14:00 Hrs',
    rev: '16-07-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/040724_extnsn_notc_nit_no_06_em_i_p_tvnl_ran_2425_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '20/EM-I/W/TVNL/RAN/2023-24',
    subject:
      'Annual Operation and maintenance including overhauling of Air Conditioning Plants of 2x210MW Units for One Year at TTPS, Lalpania.',
    prev: '03-04-2024 | 14:00 Hrs',
    rev: '19-04-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/080424_nit_extnsn_notc_20_em_i_w_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '17/CIVIL/W/TVNL/RAN/2023-24',
    subject:
      'Preparation of modified Layout Plan of TTPS, Lalpania as per Factories act 1948 & Jharkhand Factory rule 1950.',
    prev: '21-02-2024 | 14:00 Hrs',
    rev: '22-03-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/070324_nit_17_cvl_1st_ext_notc_tvnl.pdf',
  },
  {
    type: 'extension',
    nit: '016/OP/P/TVNL/RAN/2023-24',
    subject:
      'Supply of Caustic Soda Lye Concentration: 46% to 48%(100% equivalent NaOH) basis at TTPS, Lalpania.',
    prev: '12-02-2024 | 14:00 Hrs',
    rev: '20-02-2024 | 14:00 Hrs',
    doc: 'content/documents/notices/nit_016_op_p_tvnl_ran_2324_1st_extn_ntc_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '05/CIVIL/W/TVNL/RAN/2026-27',
    subject:
      'Supply, installation and commissioning of one PITLESS type, road Weighbridge of capacity 100MT, size 16mX3.5m along with complete civil works and comprehensive annual maintenance for 03 years at TTPS Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/080526_crgdm_notc_nit_05_civil_2627.PDF',
  },
  {
    type: 'corrigendum',
    nit: '51/Civil/W/TVNL/RAN/2025-26',
    subject:
      'For the work of evacuation of ash from Ash Pond of TTPS, its nuisance-free transportation & disposal in defined areas provided by the Plant',
    prev: '',
    rev: '',
    doc: 'content/documents/tenders/30_03_26_crgdm_notc_nit_51.pdf',
  },
  {
    type: 'corrigendum',
    nit: '02/Solar/EPC/TVNL/RAN/2025-26',
    subject:
      'Selection of EPC Contractor for setting up of 50 MW (AC) Solar Photovoltaic Grid-Connected Power Plants at TTPS, Lalpania, Bokaro on Turnkey basis and its 10 (5+5) Years Comprehensive operation and Maintenance',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_02_solar_epc_tvnl_ran_25_26_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '34/EMG/W/TVNL/RAN/24-25',
    subject:
      'Engagement of NABL accredited agency for the work of monitoring and testing of environmental parameters and preparation of environmental statement of TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_34_emg_w_tvnl_ran_2425_crgdm.pdf',
  },
  {
    type: 'corrigendum',
    nit: 'EOI No. 12/CIVIL/W/TVNL/RAN/2024-25',
    subject:
      'Invitation for Expression of Interest (EOI) for Invitation for collection and sale of Cenosphere from Tenughat TPS ash pond “as is where is basis”',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/corrig-100724_crgdm_date_extnsn_nit_12_cvl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_14_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_13_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_12_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_11_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_10_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_9_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_8_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/150424_crgdm_7_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/150324_crgdm_6_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/200224_crgdm_5_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/310124_crgdm_4_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/160124_crgdm_3_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/08_01_24_nit_11_coal_rjbr_end_w_tvnl_2324_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24',
    subject:
      'Selection of Mine Developer and Operator for development and operation of Rajbar E&D Coal Mine, Auranga Coalfield in Latehar District, Jharkhand',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/221223_crgdm_1_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'corrigendum',
    nit: '06/EM-I/W/TVNL/RAN/2023-24',
    subject:
      'Annual Operation and Maintenance including overhauling of Air Conditioning Plants of 2x210MW Units for 01(One) Year at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/crgdm_ntc1_nit06_2324.pdf',
  },
  {
    type: 'corrigendum',
    nit: '01/BMD/P/TVNL/RAN/2023-24',
    subject:
      'Procurement of 4-bodied HP pump Model-PL 4 H10 FOR 10 473 Make-POCLAIN for main Lube oil system of mill BBD4760BIS at TTPS, LALPANIA.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/19_05_nit_01_bmd_p_tvnl_ran_2324_crgdm_ntc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '01/BMD/P/TVNL/RAN/2023-24',
    subject:
      'Procurement of 4-bodied HP pump Model-PL 4 H10 FOR 10 473 Make-POCLAIN for main Lube oil system of mill BBD4760BIS at TTPS, LALPANIA.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/19_05_nit_01_bmd_p_tvnl_ran_2324_crgdm_ntc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '67/EMG/W/TVNL/RAN/22-23',
    subject:
      'Engagement of NABL accredited agency for the work of monitoring and testing of environmental parameters and preparation of environmental statement of TTPS, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/09_05_23_crgdm_notc_nit_67_2223.pdf',
  },
  {
    type: 'corrigendum',
    nit: '36/OS/Solar Plant/TVNL/RAN/2022-23',
    subject:
      'Engagement of Project management consultant (PMC) for selection of EPC contractor and for end to end support for setting up of 50MW ground mounted, grid connected solar photo voltaic power plant at TTPS Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_36_os_solar_plant_tvnl_ran_2223_crgdm_ntc1.pdf',
  },
  {
    type: 'corrigendum',
    nit: '45/CIVIL/W/TVNL/RAN/2021-22',
    subject:
      'Stability test of buildings and structures of plant except BOP at TTPS, Lalpania as per Factories act 1948 & Jharkhand Factory rule 1950',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_45_cvl_w_tvnl_ran_2122_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '38/OP/P/TVNL/RAN/2021-22',
    subject:
      'Supply of Caustic Soda Lye (Concentration: 46% to 48%) at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_38_op_p_tvnl_ran_2122_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '010/OP/P/TVNL/RAN/2020-21',
    subject:
      'Supply of Bomb Calorimeter for Chemical laboratory at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_010_op_p_tvnl_ran_2021_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '010/OP/P/TVNL/RAN/2020-21',
    subject:
      'Supply of Bomb Calorimeter for Chemical laboratory at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_010_op_p_tvnl_ran_2021_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '51/EM-II/P/TVNL/RAN/2019-20',
    subject:
      'Procurement of three nos. of transformers of 500 KVA , 11/0.415 KV; 3 phase, 50Hz, copper wound.( Make only of : (i) Kirloskar Electric Company Ltd. (ii) Crompton Greaves Ltd.iii) Schnieder Electricals iv) Transformer and Rectifiers India Ltd. Ahmedabad v) Runthal Industries .) for TTPS Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/NIT 51 Extension and Corrigendum Notice.pdf',
  },
  {
    type: 'corrigendum',
    nit: '51/EM-II/P/TVNL/RAN/2019-20',
    subject:
      'Procurement of three nos. of transformers of 500 KVA , 11/0.415 KV; 3 phase, 50Hz, copper wound.( Make only of : (i) Kirloskar Electric Company Ltd. (ii) Crompton Greaves Ltd.iii) Schnieder Electricals iv) Transformer and Rectifiers India Ltd. Ahmedabad v) Runthal Industries .) for TTPS Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/10_01_2020_crgdm_nit_51_1.pdf',
  },
  {
    type: 'corrigendum',
    nit: '053/TM/P/TVNL/RAN/2019-20',
    subject:
      'Supply of spares for HP Bypass of both the Units in TG area, TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_53_boq_crgdm_notc.pdf',
  },
  {
    type: 'corrigendum',
    nit: '15/Extn. Project/W/TVNL/RAN/19-20',
    subject:
      'EPC work of installation of Ash Water Recirculation System (AWRS) at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/13_09_2019_reply_to_bid_queries_nit_15.pdf',
  },
  {
    type: 'corrigendum',
    nit: '15/Extn. Project/W/TVNL/RAN/19-20',
    subject:
      'EPC work of installation of Ash Water Recirculation System (AWRS) at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/tnder_crgdm_no_2_nit_15.pdf',
  },
  {
    type: 'corrigendum',
    nit: '15/Extn. Project/W/TVNL/RAN/19-20',
    subject:
      'EPC work of installation of Ash Water Recirculation System (AWRS) at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/Nit No-15_crrgndm_ntc_1920.pdf',
  },
  {
    type: 'corrigendum',
    nit: '15/Extn. Project/W/TVNL/RAN/19-20',
    subject:
      'EPC work of installation of Ash Water Recirculation System (AWRS) at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/Nit No-15_crrgndm_ntc_1920.pdf',
  },
  {
    type: 'corrigendum',
    nit: '27/EM-II/W/TVNL/RAN/2019-20',
    subject:
      'Annual contract for provision of security arrangement at railway cabin, kodwatand at TTPS Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/corigndm_ntc_Nit no-27_1920.pdf',
  },
  {
    type: 'corrigendum',
    nit: '30/C&I-I/W/TVNL/RAN/2019-20',
    subject:
      'Round the clock annual Operation & Maintenance work of all Field instruments and secondary instruments of C&I Circle of 2x210 MW Units at Tenughat TPS.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/corigndm_ntc_Nit no-030_1920.pdf',
  },
  {
    type: 'corrigendum',
    nit: '25/EM-II/W/TVNL/RAN/2019-20',
    subject:
      'Annual maintenance & operation contract of all electrical equipment’s of Coal handling plant and Ash handling plant of 2 X 210MW units at Tenughat Thermal Power Station, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/corigndm_ntc_Nit no-25_1920.pdf',
  },
  {
    type: 'corrigendum',
    nit: '26/EM-II/W/TVNL/RAN/2019-20',
    subject:
      'Annual Maintenance contract of HT/LT Lines and Equipments of 33/11/6.6 KV Sub-Station and Lighting Installations of Power house and Colony at TTPS Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/corigndm_ntc_Nit no-26_1920.pdf',
  },
  {
    type: 'corrigendum',
    nit: '28/EM-II/W/TVNL/RAN/2019-20',
    subject:
      'Annual contact for operation & maintenance work of Hydrogen Generation plant at TTPS Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/corigndm_ntc_Nit no-28_1920.pdf',
  },
  {
    type: 'cancellation',
    nit: '50/EM-I/W/TVNL/RAN/2025-26',
    subject:
      'Annual Operation and Maintenance including minor Overhauling of Air–Conditioning Plants of 2x210MW Units for one year at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/tenders/cancellation_notice_04082026.pdf',
  },
  {
    type: 'cancellation',
    nit: '02/Solar/EPC/TVNL/RAN/2025-26',
    subject:
      'Selection of EPC Contractor for setting up of 50 MW (AC) Solar Photovoltaic Grid-Connected Power Plants at TTPS, Lalpania, Bokaro on Turnkey basis and its 10 (5+5) Years Comprehensive operation and Maintenance',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/08_07_26_cncl_notc_nit_02_solar_epc_tvnl_ran_2526.pdf',
  },
  {
    type: 'cancellation',
    nit: '45/BMD/W/TVNL/RAN/2025-26',
    subject:
      '1. Annual Rate Contract for Boiler Pressure Parts & H.P. Valves of Boiler of Unit No. 1 & 2 at TTPS, Lalpania for the period of two years. 2. Annual Rate Contract for APH, Scanner Fan, Dampers and Gates of Boiler of Unit No. 1 & 2 for the period of two years.',
    prev: '',
    rev: '',
    doc: 'content/documents/tenders/080426_memo_no_29_2627_cancl_notc_tvnl.pdf',
  },
  {
    type: 'cancellation',
    nit: '23/MTP/W/TVNL/RAN/2025-26 (GEM/2025/B/6704284)',
    subject:
      'AMC of Assistance in computer operating works by engaging one (01) no. of computer operator and six (06) nos. of assistance computer operators works in different circles at TTPS, Lalpania for two years.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/090326_cancl_notc_nit_23_2526.pdf',
  },
  {
    type: 'cancellation',
    nit: '28/BMD/W/TVNL/RAN/2025-26',
    subject:
      'Annual Rate Contract for 02 (Two) years and annual overhauling of Mills BBD 4760 BIS, Raw Coal Feeders, Classifiers etc of Unit-1&2 of TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/tenders/241225_cancl_notc__nit_28_bmd_2526.pdf',
  },
  {
    type: 'cancellation',
    nit: '04/C&I-II/P/TVNL/RAN/2025– 26',
    subject:
      'Supply of clamp on ultrasonic flowmeter and its accessories including engineering, assembly, integration, installation & commissioning & site testing of CW pumps of 1600mm Dia, flow rate 16000M3/HR, line pressure 2 Kg/Cm2 & medium raw water as well as data transmission with remote terminal unit for cloud connectivity including water balancing dashboard on existing cloud at TTPS, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/241125_1148_nit_04_cni_ii_cancl_notc_2526_nw.pdf',
  },
  {
    type: 'cancellation',
    nit: '22/C&I-I/P/TVNL/RAN/2025–26 (GEM/2025/B/6693773)',
    subject:
      'Supply and commissioning of H2 Purity Analyzer set of Purity Panel for Unit #2 at TTPS, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/241125_1147_nit_22_cni_ii_cancl_notc_2526.pdf',
  },
  {
    type: 'cancellation',
    nit: '03/BMD/W/TVNL/RAN/2024-25',
    subject:
      'Annual maintenance contract for the work for Round the Clock Running Operation & Maintenance of Ash Handling System of 2x210 MW unit no I&II at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/141125_cancl_notc_nit_03_bmd_tvnl.pdf',
  },
  {
    type: 'cancellation',
    nit: '16/HR/W/TVNL/RAN/2024-25',
    subject:
      'Engagement of Govt. recruitment agency for filling internal vacancy of TVNL',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_16_cancel_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '34/EMG/W/TVNL/RAN/24-25',
    subject:
      'Engagement of NABL accredited agency for the work of monitoring and testing of environmental parameters and preparation of environmental statement of TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/070825_nit_34_emg_2425_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '09/CHP-II/W/TVNL/RAN/2025-26 (GEM/2025/B/6412787)',
    subject:
      'Annual Contract for the Service/Work of picking stones/shales/ boulders /foreign materials etc., cleaning, grass cutting and other assigned housekeeping jobs in PCH and RH-1, 2 area of coal yard for the period of two years.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/30_07_2025_cancl_notc_nit_09_chp_ii_2526.pdf',
  },
  {
    type: 'cancellation',
    nit: '10/CHP-II/W/TVNL/RAN/2025-26 (GEM/2025/B/6412586)',
    subject:
      'Annual Contract for the Service/Work of picking stones/shales/ boulders /foreign materials etc. , cleaning, grass cutting and other assigned housekeeping jobs in RH-3, 4 and TP-1 to Conveyer 7 area of coal yard for the period of two years.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/30_07_2025_cancl_notc_nit_10_chp_ii_2526.pdf',
  },
  {
    type: 'cancellation',
    nit: '39/CIVIL/W/TVNL/RAN/2024-25',
    subject:
      'Supply of one rake of stone Ballast (2100.00 M3) as per latest RDSO specification including spreading and packing for Rail line between Dumri Bihar railway siding and Tenughat TPS siding',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/260625_nit_39_cvl_2425_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '26/EM-II/W/TVNL/RAN/2024-25',
    subject:
      'Annual contract for operation & maintenance work of Hydrogen Generation plant at TTPS Lalpania for 02 (Two) Years',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/040625_nit_26_em_ii_w_tvnl_ran_2425_cancltn_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '27/EM-II/W/TVNL/RAN/2024-25',
    subject:
      'AMC of O&M for two shifts (morning & evening shift) of Reception building & Service building Lift in Power House at TTPS Lalpania for 02 (Two) Years',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/040625_nit_27_em_ii_w_tvnl_ran_2425_doc.pdf',
  },
  {
    type: 'cancellation',
    nit: '23/EM-II/W/TVNL/RAN/2024-25',
    subject:
      'Annual Maintenance Contract for all electrical systems of HT/LT lines and equipment of 33/11/6.6 KV Substation and lighting installations of power house and colony for two years at TTPS Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/040625_nit_23_em_ii_w_tvnl_ran_2425_cancltn_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '36/Fire & Safety/W/TVNL/RAN/2024-25',
    subject:
      'Open Tender for Standard Fire and Special Perils Policy with STFI Cover for Tenughat Thermal Power Station at Lalpania, Bokaro',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_36_fire_safety_w_tvnl_ran_2425_canl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '25/EM-II/W/TVNL/RAN/2024-25',
    subject:
      'Annual maintenance & operation contract of all electrical equipment`s of Coal handling plant and Ash handling plant of 2 X 210MW units at Tenughat Thermal Power Station for 02 (Two) Years',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_25_em_ii_w_tvnl_ran_2425_canl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '03/Coal Block Rajbar/W/TVNL/RAN/23-24',
    subject:
      'Preparation of EIA (Environmental Impact Assessment) & EMP (Environmental Management Plan), Rehabilitation & Resettlement Plan (Including SIA) and CSR Plan including grant of Environment Clearance for Rajbar E&D Coal Mine.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/09_11_23_757_nit_no_03_rajbar_w_tvnl_2324_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '20/New Project/W/TVNL/RAN/22-23',
    subject:
      'EPC work for installation of Ash Water Recirculation System (AWRS) in the existing units of 2x210MW at Tenughat TPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/09_11_23_758_nit_no_20_nw_prjct_w_tvnl_2223_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '06/EM-I/W/TVNL/RAN/2023-24',
    subject:
      'Annual Operation and Maintenance including overhauling of Air Conditioning Plants of 2x210MW Units for 01(One) Year at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_06_em_i_w_tvnl_ran_2324_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '32/S&M/W/TVNL/RAN/2022-23',
    subject:
      'AMC for Maintaining adequate stock of filled Hydrogen gas cylinders in T. G. Hall. Unloading of bulk chemicals & lubricant drums & stacking inside shed, periodical cleaning of Store sheds with brooms at TTPS Lalpania for 02(two) years.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_32_sm_w_tvnl_ran_2223_canc_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '07/CIVIL/W/TVNL/RAN/2023-24',
    subject:
      'For the work of evacuation of ash from Ash Pond of TTPS, its nuisance free transportation & disposal in defined areas provided by the plant.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/22_09_23_nit_07_civil_w_tvnl_ran_2324_cancl_ntc.pdf',
  },
  {
    type: 'cancellation',
    nit: '65/C&I/W/TVNL/RAN /2022-23',
    subject:
      'Round the clock Operation & Maintenance work of all field instruments and secondary instruments of C&I circle of 2*210 MW Units at TTPS, Lalpania for 02 years.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/19_09_23_ltr_no_605_nit_65_cni_2223_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '01/BMD/P/TVNL/RAN/2023-24',
    subject:
      'Procurement of 4-bodied HP pump Model-PL 4 H10 FOR 10 473 Make-POCLAIN for main Lube oil system of mill BBD4760BIS at TTPS, LALPANIA.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/11_08_23_cancl_notc_nit_no_01_bmd_p_tvnl_ran_2324.pdf',
  },
  {
    type: 'cancellation',
    nit: '18/EM-II/P/TVNL/RAN/2022-23',
    subject:
      'Supply, erection & commissioning of two set Electromagnetic Suspension Magnet for Conveyor 1A & 1B at CHP TTPS Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/tender_cancel_nit_no_18and19_02_03_2023.pdf',
  },
  {
    type: 'cancellation',
    nit: '19/EM-II/P/TVNL/RAN/2022-23',
    subject:
      'Design, Manufacture, Testing and supply of Air/oil cooled one set of In-line magnetic separator (ILMS) for Coal handling plant at TTPS Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/tender_cancel_nit_no_18and19_02_03_2023.pdf',
  },
  {
    type: 'cancellation',
    nit: '22/BMD/P/TVNL/RAN/2022-23',
    subject:
      'Supply of baskets (Hot End baskets, Hot intermediate baskets and Cold end baskets) for APH at TTPS, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/16_02_2023_cancl_notc_nit_no22_bmd_2223.pdf',
  },
  {
    type: 'cancellation',
    nit: '21/IT/W/TVNL/RAN /2022-23',
    subject:
      'Up-gradation of Sybase database & patches and kernel of ECC System with customization of Form -16 accordingly latest Tax Systems and resolve the issues in the leave approval system in ESS',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/13_01_23_nit_21_it_w_tvnl_ran_2223_cncln_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '33/CIVIL/W/TVNL/RAN /2022-23',
    subject:
      'Supply, installation and commissioning of one PITLESS type, road Weighbridge of capacity 100MT, size 16mx3.5m along with complete civil works and comprehensive annual maintenance for 03 years at TTPS Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/27_12_22_nit_no_33_cvl_w_tvnl_ran_2223_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '07/BMD/W/TVNL/RAN/2022-23',
    subject:
      'Annual Rate Contract for 02 (TWO) years and annual overhauling of ESPs of Unit No. 1 & 2 of TTPS, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_no_07_bmd_w_tvnl_ran_2223_cncl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '34/OP/W/TVNL/RAN /2021-22',
    subject:
      'Annual maintenance contract for general cleaning, housekeeping & removal of dust, dirt & technological waste from Unit-1 & Unit-2 and other auxiliary buildings of 2 x 210 MW units at TTPS.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/07_09_22_nit_34_op_w_tvl_ran_2122_canclnt_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '16/Fire & Safety/W/TVNL/RAN/2022-23',
    subject:
      'Standard Fire and Special Perils Policy with STFI Cover and Marine Cargo Open Policy for Tenughat Thermal Power Station at Lalpania, Bokaro',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/30_08_2022_nit_no_16_fire_n_safety_w_tvnl_ran_2223.pdf',
  },
  {
    type: 'cancellation',
    nit: '52/C&I/W/TVNL/RAN /2021-22',
    subject:
      'Annual Operation & Maintenance work of all field and secondary instruments of C&I circle of 2*210 MW Units at Tenughat TPS for 02 (Two) years',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/52_cni_w_tvnl_ran_2122_cancl_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '32/OP/W/TVNL/RAN /2021-22',
    subject:
      'Annual maintenance contract for operation of fire fighting pump house and Air Compressor & drier plant of 2 x 210 MW at TTPS, Lalpania.',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/nit_32_op_w_tvnl_ran_2122_canc_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '26/CHP-I/P/TVNL/RAN/2021-22',
    subject:
      'Annual contract for engagement of Operation Assistance in operation Group-A Coal Handling Plant at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/01_08_22_nit_26_2122_cancltn_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '23/CHP-I/P/TVNL/RAN/2021-22',
    subject:
      'Annual Contract for maintenance of running equipment during the operation of system in Group-A in Coal Handling Plant at T.T.P.S., Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/01_08_22_nit_23_2122_cancltn_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '21/CHP-I/P/TVNL/RAN/2021-22',
    subject:
      'Annual Contract for pocking of coal on RH-3/RH-4 gratings, sprinkling of water on coal for dust suppression and running and cleaning of jammed Paddle Feeder, deck plate/platform and cleaning of drain in RH3, Operation/cleaning of suspended magnet, material handling from central store to site store and vice versa and any other jobs assigned by EIC in operation Group-A Coal Handling Plant at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/01_08_22_nit_21_2122_cancltn_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '18/CHP-I/P/TVNL/RAN/2021-22',
    subject:
      'Annual Contract for cleaning and removal of coal dust/slurry/wastes cutting of grasses etc. along running conveyers from Reclaim hopper-3 (RH-3 minus meter, pent house), Conveyer 8A/8B upto Primary Crusher House (PCH), conveyer-7 and any other jobs assigned by EIC in coal Handling Plant at TTPS, Lalpania',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/01_08_22_nit_18_2122_cancltn_notc.pdf',
  },
  {
    type: 'cancellation',
    nit: '43/EM-II/W/TVNL/RAN/2021-22',
    subject:
      'Annual Maintenance contact for operation & maintenance work of electrical equipments of G.C.R., PLCC system and 220kV/400kV switchyard at TTPS Lalpania for 02 (Two) years',
    prev: '',
    rev: '',
    doc: 'content/documents/notices/43_em_ii_w_tvnl_ran_2122_cancltn_notc.pdf',
  },
]
const boardNotices = [
  {
    type: 'circulars',
    date: '28-11-2018',
    title: 'Appointment Order of the Managing Director',
    doc: 'content/documents/notices/app_ltr_md_2018.pdf',
  },
  {
    type: 'updates',
    date: '02-04-2026',
    title:
      'Notice for Cancellation of Walk-in Interview, Notification no. 07/26-27, dated: 02-04-26 towards engagement of Coal Mining Consultant in TVNL, Ref. No. 811/26-27, Dated : 10-09-2026',
    doc: 'content/documents/notices/cancln_notc_noti_07_2627.pdf',
  },
  {
    type: 'updates',
    date: '04-08-2026',
    title:
      'Tender Cancellation Notice for 50/EM-I/W/TVNL/RAN/2025-26, Dated : 04-08-2026',
    doc: 'content/documents/tenders/cancellation_notice_04082026.pdf',
  },
  {
    type: 'updates',
    date: '08-07-2026',
    title:
      'Tender Cancellation Notice for 02/Solar/EPC/TVNL/RAN/2025-26, Dated : 08-07-2026',
    doc: 'content/documents/notices/08_07_26_cncl_notc_nit_02_solar_epc_tvnl_ran_2526.pdf',
  },
  {
    type: 'updates',
    date: '04-06-2026',
    title:
      'e-Tender Extension Notice for NIT No:- 08/OP/P/TVNL/RAN/2026-27, Dated 04-06-2026',
    doc: 'content/documents/tenders/tender_extension_notics_04062026.pdf',
  },
  {
    type: 'updates',
    date: '21-05-2026',
    title:
      'e-Tender Extension Notice for NIT No:- 42/BMD/P/TVNL/RAN/2025-26, Dated 21-05-2026',
    doc: 'content/documents/notices/e_tender_extension_notice_22052026.pdf',
  },
  {
    type: 'updates',
    date: '08-05-2026',
    title:
      'Tender Clarification Notice against the NIT NO-05/CIVIL/W/TVNL/RAN/2026-27, Dated : 08-05-2026',
    doc: 'content/documents/notices/080526_crgdm_notc_nit_05_civil_2627_nw.pdf',
  },
  {
    type: 'updates',
    date: '04-05-2026',
    title:
      'Tender Extension Notice for NIT No:- 05/CIVIL/W/TVNL/RAN/2026-27, Dated: 04-05-2026',
    doc: 'content/documents/tenders/nit_05_extnsn_notc_127_tvnl_2627.pdf',
  },
  {
    type: 'updates',
    date: '27-04-2026',
    title:
      'Tender Extension Notice for NIT No: 29/HR/W/TVNL/RAN/2025– 26, Dated: 27-04-2026',
    doc: 'content/documents/tenders/e-tender_extension_notices.pdf',
  },
  {
    type: 'updates',
    date: '15-04-2026',
    title:
      'Tender Extension Notice for NIT No:- 42/BMD/P/TVNL/RAN/2025-2026, Dated : 15-04-2026',
    doc: 'content/documents/notices/e-tender-ex-not.pdf',
  },
  {
    type: 'updates',
    date: '15-04-2026',
    title:
      'Tender Extension Notice for NIT No:- 39/OPERATION/P/TVNL/RAN/2025-26, Dated : 15-04-2026',
    doc: 'content/documents/notices/e-tender-ex-not39.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Tender Extension Notice for NIT No:- 31/EM-II/P/TVNL/RAN/2025–26',
    doc: 'content/documents/tenders/171225_extnsn_notc_nit_31_em_ii_2526.pdf',
  },
  {
    type: 'updates',
    date: '01-12-2025',
    title:
      'Tender Extension Notice for NIT No:- 26/ HR/W /TVNL/RAN/2025-26, Dated : 01-12-2025',
    doc: 'content/documents/notices/011225_extns_notc_nit_26_hr_2526_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '24-11-2025',
    title:
      'Tender Cancellation Notice for NIT No:- 22/C&I-I/P/TVNL/RAN/2025–26 (RFX No-1000011095), Dated : 24-11-2025',
    doc: 'content/documents/notices/241125_1147_nit_22_cni_ii_cancl_notc_2526.pdf',
  },
  {
    type: 'updates',
    date: '24-11-2025',
    title:
      'Tender Cancellation Notice for NIT No:- 04/C&I-II/P/TVNL/RAN/2025–26, Dated : 24-11-2025',
    doc: 'content/documents/notices/241125_1148_nit_04_cni_ii_cancl_notc_2526_nw.pdf',
  },
  {
    type: 'updates',
    date: '14-11-2025',
    title:
      'Cancellation Notice for NIT No:- 03/BMD/W/TVNL/RAN/2024-25, Dated : 14-11-2025',
    doc: 'content/documents/notices/141125_cancl_notc_nit_03_bmd_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '07-11-2025',
    title:
      'Tender Extension Notice for NIT NO- 27/COMM./W/TVNL/RAN/2025–26, Dated : 07-11-2025',
    doc: 'content/documents/notices/071125_extnsn_notc_nit_27_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '',
    title:
      'Clarification Notice against the NIT No-25/CIVIL/W/TVNL/RAN/2025-26 due on 31.10.2025.',
    doc: 'content/documents/notices/clarification_notice_no._1014.pdf',
  },
  {
    type: 'updates',
    date: '15-10-2025',
    title:
      'Tender Extension Notice for NIT No:- 25/CIVIL/W/TVNL/RAN/2025-26 Dated: 15-10-25',
    doc: 'content/documents/notices/151025_nit_extnsn_notc_civil_time.pdf',
  },
  {
    type: 'updates',
    date: '04-09-2025',
    title:
      'Tender Extension Notice for NIT No:- 19/CIVIL/W/TVNL/RAN/2025-26 RFX No-1000012171 Dated: 04-09-25',
    doc: 'content/documents/notices/260925_nit_19_doc.pdf',
  },
  {
    type: 'updates',
    date: '01-09-2025',
    title:
      'Tender Extension notice for NIT No:- 13/IT/W/TVNL/RAN/2025-26 (SRM RFX No. 1000011928) Dated: 01-09-25',
    doc: 'content/documents/notices/020925_nit_13_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '01-09-2025',
    title:
      'Tender Extension Notice for NIT No:- 14/EM-I/P/TVNL/RAN/2025-26 (SRM RFX No. 1000011336) Dated: 01-09-25',
    doc: 'content/documents/notices/020925_nit_14_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '26-08-2025',
    title:
      'Tender Cancellation Notice for NIT No:- 16/HR/W/TVNL/RAN/2024-25, Dated : 26-08-2025',
    doc: 'content/documents/notices/nit_16_cancel_notc.pdf',
  },
  {
    type: 'updates',
    date: '11-08-2025',
    title:
      '2nd Tender Extension Notice for NIT No:- 08/TM/P/TVNL/RAN/25-26 (GEM Tender No. GEM/2025/B/6268604), Dated : 11-08-2025',
    doc: 'content/documents/notices/110825_2nd_extnsn_notc_nit_8_dg_2526.pdf',
  },
  {
    type: 'updates',
    date: '07-08-2025',
    title:
      'Tender Extension Notice for NIT No:- 07/CIVIL/W/TVNL/RAN/2025-26, Dated : 07-08-2025',
    doc: 'content/documents/notices/070825_nit_extnsn_notc_civil2526.pdf',
  },
  {
    type: 'updates',
    date: '07-08-2025',
    title:
      'Tender Cancellation Notice for NIT No:- 34/EMG/W/TVNL/RAN/24-25, Dated : 07-08/2025',
    doc: 'content/documents/notices/070825_nit_34_emg_2425_cancl_notc.pdf',
  },
  {
    type: 'updates',
    date: '30-07-2025',
    title:
      'Tender Cancellation Notice for NIT No:- 09/CHP-II/W/TVNL/RAN/2025-26 (GEM/2025/B/6412787) and NIT No:- 10/CHP-II/W/TVNL/RAN/2025-26 (GEM/2025/B/6412586), Dated : 30-07-2025',
    doc: 'content/documents/notices/30_07_2025_cancl_notc_nit_09_10_chp_ii_2526_-_Copy.pdf',
  },
  {
    type: 'updates',
    date: '',
    title:
      '3rd Tender Extension Notice for NIT : 02/Solar/EPC/TVNL/RAN/2025–26',
    doc: 'content/documents/notices/240725_tndr_extnsn_nit_02_solar_2526.pdf',
  },
  {
    type: 'updates',
    date: '23-07-2025',
    title:
      'Tender Extension Notice for NIT No:- 08/TM/P/TVNL/RAN/25-26 (GEM Tender No. GEM/2025/B/6268604), Dated : 23-07-2025',
    doc: 'content/documents/notices/230725_extnsn_notc1_nit_08_2526.pdf',
  },
  {
    type: 'updates',
    date: '17-07-2025',
    title:
      'Tender Extension Notice for NIT No:- 07/CIVIL/W/TVNL/RAN/2025-26, Dated : 17-07-2025',
    doc: 'content/documents/notices/170725_extnsn_notc_nit_07_civil_memo_no_529_2526.pdf',
  },
  {
    type: 'updates',
    date: '',
    title:
      '2nd Tender Extension Notice for NIT : 02/Solar/EPC/TVNL/RAN/2025–26',
    doc: 'content/documents/notices/030725_tndr_extnsn_nit_02_2526.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Tender Cancellation Notice for NIT No-39/CIVIL/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/260625_nit_39_cvl_2425_cancl_notc.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Tender Extension Notice for NIT No. 05/BMD/P/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/260625_extnsn_notc_nit_05_2425.pdf',
  },
  {
    type: 'updates',
    date: '04-06-2025',
    title:
      'Cancellation Notice for NIT No:- 23/EM-II/W/TVNL/RAN/2024-25, Dated : 04-06-2025',
    doc: 'content/documents/notices/040625_nit_23_em_ii_w_tvnl_ran_2425_cancltn_notc.pdf',
  },
  {
    type: 'updates',
    date: '04-06-2025',
    title:
      'Cancellation Notice for NIT No:- 26/EM-II/W/TVNL/RAN/2024-25, Dated : 04-06-2025',
    doc: 'content/documents/notices/040625_nit_26_em_ii_w_tvnl_ran_2425_cancltn_notc.pdf',
  },
  {
    type: 'updates',
    date: '04-06-2025',
    title:
      'Cancellation Notice for NIT No:- 27/EM-II/W/TVNL/RAN/2024-25, Dated : 04-06-2025',
    doc: 'content/documents/notices/040625_nit_27_em_ii_w_tvnl_ran_2425_doc.pdf',
  },
  {
    type: 'updates',
    date: '02-06-2025',
    title:
      'Tender Notice, dated: 02-06-2025 for NIT no: - 06/Fire & Safety/W/TVNL/RAN/2025-26',
    doc: 'content/documents/notices/nit_no_06_fire_Safety__w_tvnl_ran_2025_26_dt_2_6_25_notc.pdf',
  },
  {
    type: 'updates',
    date: '29-05-2025',
    title:
      'Tender Extension Notice, dated: 29-05-2025 for NIT No:-05/BMD/P/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/nit_no_05_bmd_p_tvnl_ran_2425_290525.pdf',
  },
  {
    type: 'updates',
    date: '22-05-2025',
    title:
      'Corrigendum Notice No. 1 for the NIT No. :- 02/Solar/EPC/TVNL/RAN/2025–26, Dated: 22-05-2025',
    doc: 'content/documents/notices/nit_02_solar_epc_tvnl_ran_25_26_crgdm_notc.pdf',
  },
  {
    type: 'updates',
    date: '13-05-2025',
    title:
      '2nd Tender Extension Notice, dated 13-05-2025 for NIT No: - 01/ COMM./W/TVNL/RAN/2025-26',
    doc: 'content/documents/notices/13_05_2025_nit_01_comm_w_tvnl_ran_2526_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '02-05-2025',
    title:
      'Tender Extension Notice, dated: 02-05-2025 for NIT No:- 01/ COMM./W/TVNL/RAN/2025-26',
    doc: 'content/documents/notices/02_05_2025_nit_01_comm_w_tvnl_ran_2526_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '25-04-2025',
    title:
      'Tender Extension Notice, dated: 25-04-2025 for NIT No:- 39/CIVIL/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/250425_nit_no_39_civil_w_tvnl_ran_2425_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '24-03-2025',
    title:
      'Tender Extension Notice, dated: 24-03-2025 for NIT No:- 38/CIVIL/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/24_03_25_ltr_no_1645_ext_nit_38_civil_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '18-03-2025',
    title:
      'Cancellation Notice for NIT No:- 36/Fire & Safety/W/TVNL/RAN/2024-25, Dated : 18-03-2025',
    doc: 'content/documents/notices/nit_no_36_fire_safety_w_tvnl_ran_2425_canl_notc.pdf',
  },
  {
    type: 'updates',
    date: '25-02-2025',
    title:
      'Corrigendum Notice for NIT No:- 34/EMG/W/TVNL/RAN/24-25, Letter No. 1487/2024-25, Dated : 25-02-2025',
    doc: 'content/documents/notices/nit_34_emg_w_tvnl_ran_2425_crgdm.pdf',
  },
  {
    type: 'updates',
    date: '17-02-2025',
    title:
      'Cancellation Notice for NIT No.- 25/EM-II/W/TVNL/RAN /2024-25, Dated : 17-02-2025',
    doc: 'content/documents/notices/nit_no_25_em_ii_w_tvnl_ran_2425_canl_notc.pdf',
  },
  {
    type: 'updates',
    date: '31-12-2024',
    title:
      '3rd Tender Extension Notice, dated: 31-12-2024, NIT No:- 22/IT/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/3rd_extnsn_notc_nit_22_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '30-12-2024',
    title:
      '2nd Tender Extension Notice, dated: 30-12-2024 for NIT No:- 30/EM-II/P/TVNL/RAN/2024–25',
    doc: 'content/documents/notices/301224_extnsn_notc_nit_30_2425_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '02-12-2024',
    title:
      '2nd Tender Extension Notice, dated: 02-12-2024 for NIT No:- 22/IT/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/021224_2nd_tndr_extnsn_nit_22_it_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '02-12-2024',
    title:
      'Tender Extension Notice, dated: 02-12-2024 for NIT No:- 29/EM-I/W/TVNL/RAN/2024-25 and NIT No:- 30/EM-II/P/TVNL/RAN/2024–25',
    doc: 'content/documents/notices/021224_extnsn_notc_nit_29_30_2425_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '02-12-2024',
    title:
      '2nd Tender Extension Notice, dated: 02-12-2024 for NIT No:- 031/OP/P/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/021224_extnsn_notc_nit_031_2425.pdf',
  },
  {
    type: 'updates',
    date: '18-11-2024',
    title:
      'Tender Extension Notice, dated: 18-11-2024 for NIT No:- 031/OP/P/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/181124_nit_031_extnsn_notc_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '14-10-2024',
    title:
      'Tender Extension Notice, dated: 14-10-2024 for NIT No:- 21/C&I/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/141024_nit_21_cni_2425_ext_notc.pdf',
  },
  {
    type: 'updates',
    date: '14-10-2024',
    title:
      'Tender Extension Notice, dated: 14-10-2024 for NIT No:- 22/IT/W/TVNL/RAN/2024-25',
    doc: 'content/documents/notices/141024_nit_no_22_it_2425_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'TVNL True Up Petition for FY 2016-17 to FY 2020-21',
    doc: 'content/documents/notices/tvnl_tru_up_petn_fy1617_2021.pdf',
  },
  {
    type: 'updates',
    date: '12-07-2024',
    title:
      'Public Notice - Objections/Comments invited from various stakeholders on the Petitions for the approval of True-up for FY 2016-17 to FY 2020-21, Letter No. 378/24-25, Date: 12-07-2024',
    doc: 'content/documents/notices/12_07_24_publc_notc_ltr_no_378_2425.pdf',
  },
  {
    type: 'updates',
    date: '10-07-2024',
    title:
      'Time Extension Notice for Bid Submission & Corrigendum against the EOI No. 12/CIVIL/W/TVNL/RAN/2024-25, Dated : 10-07-2024',
    doc: 'content/documents/notices/100724_crgdm_date_extnsn_nit_12_cvl.pdf',
  },
  {
    type: 'updates',
    date: '08-07-2024',
    title:
      'Corrigendum-14 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 08-07-2024',
    doc: 'content/documents/notices/crgdm_14_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '04-07-2024',
    title:
      'Corrigendum-13 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 04-07-2024',
    doc: 'content/documents/notices/crgdm_13_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '04-07-2024',
    title:
      'Tender Extension Notice, dated: 04-07-2024 for NIT No:- 06/EM-1/P/TVNL/RAN/2024–25',
    doc: 'content/documents/notices/040724_extnsn_notc_nit_no_06_em_i_p_tvnl_ran_2425_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '01-07-2024',
    title:
      'Corrigendum-12 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 01-07-2024',
    doc: 'content/documents/notices/crgdm_12_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '26-06-2024',
    title:
      'Corrigendum-11 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 26-06-2024',
    doc: 'content/documents/notices/crgdm_11_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '21-05-2024',
    title:
      'General Notice with reference to the E-tender No. NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24 , Letter No. 164/24-25, Date : 21-05-2024',
    doc: 'content/documents/notices/210524_gen_notc_164_nit_11_2324.pdf',
  },
  {
    type: 'updates',
    date: '15-05-2024',
    title:
      'Corrigendum-10 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 15-05-2024',
    doc: 'content/documents/notices/crgdm_10_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '10-05-2024',
    title:
      'Corrigendum-9 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 10-05-2024',
    doc: 'content/documents/notices/crgdm_9_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '30-04-2024',
    title:
      'Corrigendum-8 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 30-04-2024',
    doc: 'content/documents/notices/crgdm_8_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '15-04-2024',
    title:
      'Corrigendum-7 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 15-04-2024',
    doc: 'content/documents/notices/150424_crgdm_7_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Tender Extension Notice for NIT No:- 20/EM-I/W/TVNL/RAN/2023-24',
    doc: 'content/documents/notices/080424_nit_extnsn_notc_20_em_i_w_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '15-03-2024',
    title:
      'Corrigendum-6 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 15-03-2024',
    doc: 'content/documents/notices/150324_crgdm_6_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '07-03-2024',
    title:
      'Tender Extension Notice, dated: 07-03-2024 for NIT No:- 17/CIVIL/W/TVNL/RAN/2023-24',
    doc: 'content/documents/notices/070324_nit_17_cvl_1st_ext_notc_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '20-02-2024',
    title:
      'Corrigendum-5 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 20-02-2024',
    doc: 'content/documents/notices/200224_crgdm_5_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '31-01-2024',
    title:
      'Extension Notice, dated : 31-01-2024 for EOI Notice no. A/c-282/23-24',
    doc: 'content/documents/notices/31_01_24_eoi_ac_282_2324_notc.pdf',
  },
  {
    type: 'updates',
    date: '31-01-2024',
    title:
      'Corrigendum-4 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 31-01-2024',
    doc: 'content/documents/notices/310124_crgdm_4_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '24-01-2024',
    title:
      'Extension Notice for NIT No:- 13/Fire & Safety/W/TVNL/RAN/2023-24, Dated : 24-01-2024',
    doc: 'content/documents/notices/24_01_24_nit_no_13_fire_safety_w_tvnl_ran_2324_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '16-01-2024',
    title:
      'Corrigendum-3 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 16-01-2024',
    doc: 'content/documents/notices/160124_crgdm_3_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '',
    title:
      'Due date for submission of bids against the EOI No-02/CIVIL/W/TVNL/RAN/2023-24 is hereby extended up to 31-01-2024.',
    doc: 'content/documents/notices/tender_extension_notics_04062026.pdf',
  },
  {
    type: 'updates',
    date: '',
    title:
      'Tender Extension Notice for NIT No:- 10/New Project/W/TVNL/RAN/23-24',
    doc: 'content/documents/notices/040124_ext_ntc_nit_10_nw_prjct_tvnl_ran_2324.pdf',
  },
  {
    type: 'updates',
    date: '22-12-2023',
    title:
      'Corrigendum-1 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 22-12-2023',
    doc: 'content/documents/notices/221223_crgdm_1_nit_no_11_2324_tvnl.pdf',
  },
  {
    type: 'updates',
    date: '09-11-2023',
    title:
      'Tender Cancellation Notice for NIT No:- 03/Coal Block Rajbar/W/TVNL/RAN/23-24',
    doc: 'content/documents/notices/09_11_23_757_nit_no_03_rajbar_w_tvnl_2324_cancl_notc.pdf',
  },
  {
    type: 'updates',
    date: '09-11-2023',
    title:
      'Tender Cancellation Notice for NIT No:- 20/New Project/W/TVNL/RAN/22-23',
    doc: 'content/documents/notices/09_11_23_758_nit_no_20_nw_prjct_w_tvnl_2223_cancl_notc.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Cancellation Notice of NIT No.06/EM-I/W/TVNL/RAN/2023-24',
    doc: 'content/documents/notices/nit_no_06_em_i_w_tvnl_ran_2324_cancl_notc.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Tender Cancellation Notice for NIT No:- 32/S&M/W/TVNL/RAN/2022-23',
    doc: 'content/documents/notices/nit_32_sm_w_tvnl_ran_2223_canc_notc.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'TVNL True Up Petition for FY 2012-13 to FY 2015-16',
    doc: 'content/documents/notices/tvnl_tru_up_petn_fy1316_fnl.pdf',
  },
  {
    type: 'updates',
    date: '20-06-2023',
    title:
      'Objections/Comments invited from various stakeholders on the Petition submitted by Tenughat Vidyut Nigam Limited (TVNL) for True-up petition for the first control period from FY 2012-13 to FY 2015-16, Letter No. 244/23-24, Date: 20-06-2023',
    doc: 'content/documents/notices/20_06_23_publc_notc_ltr_no_244_2324_nw.pdf',
  },
  {
    type: 'updates',
    date: '',
    title: 'Tender Extension Notice for NIT No:- 02/CIVIL/W/TVNL/RAN/2023-24',
    doc: 'content/documents/notices/nit_02_cvl_w_tvnl_ran_2324_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '08-06-2023',
    title: 'Fourth Extension Notice for NIT No:- 60/C&I-II/W/TVNL/RAN /2022-23',
    doc: 'content/documents/notices/08_06_2023_nit_60_cni_ii_4th_extnsn_notc.pdf',
  },
  {
    type: 'updates',
    date: '19-09-2023',
    title: 'Tender Cancellation Notice for NIT No:- 65/C&I/W/TVNL/RAN /2022-23',
    doc: 'content/documents/notices/19_09_23_ltr_no_605_nit_65_cni_2223_cancl_notc.pdf',
  },
  {
    type: 'updates',
    date: '22-09-2023',
    title: 'Tender Cancellation Notice for NIT No-07/CIVIL/W/TVNL/RAN/2023-24',
    doc: 'content/documents/notices/22_09_23_nit_07_civil_w_tvnl_ran_2324_cancl_ntc.pdf',
  },
  {
    type: 'updates',
    date: '08-01-2024',
    title:
      'Corrigendum-2 for NIT No:- 11/Coal Block Rajbar E&D/W/TVNL/RAN/23-24, Dated : 08-01-2024',
    doc: 'content/documents/notices/08_01_24_nit_11_coal_rjbr_end_w_tvnl_2324_crgdm_notc.pdf',
  },
  {
    type: 'updates',
    date: '13-02-2024',
    title:
      'Tender Extension Notice, dated: 13-02-2024 for NIT No:- 016/OP/P/TVNL/RAN/2023-24',
    doc: 'content/documents/notices/nit_016_op_p_tvnl_ran_2324_1st_extn_ntc_tvnl.pdf',
  },
  {
    type: 'public',
    date: '',
    title:
      'Objections / Comments invited from various stakeholders on the Petition submitted by Tenughat Vidyut Nigam Limited (TVNL) for True-up petition for FY 2023-24 & FY 2024-25 (Falling under Third Control Period)',
    doc: 'content/documents/notices/public_notice_21052026.pdf',
  },
  {
    type: 'public',
    date: '',
    title:
      'TVNL True-up Petition for FY 2023-24 & FY 2024-25 OF Third Control Period (FY 2021-22 TO FY 2025-26)',
    doc: 'content/documents/notices/tvnl_true-up_petition_21052026.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL MYT Petition FY 2026-27 TO FY 2030-31',
    doc: 'content/documents/notices/tvnl_myt_ptn_2627_3031.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL Business Plan FY 2026-27 TO FY 2030-31',
    doc: 'content/documents/notices/tvnl_bsns_plan_2627_3031.pdf',
  },
  {
    type: 'public',
    date: '10-04-2026',
    title:
      'Public Notice - Objections/Comment invited from various stakeholders on the Petition submitted by TVNL for Business Plan and MYT (Multi-Year Tariff) for the Control Period FY 2026-27 to FY 2030-31, Letter No. 38/26-27, Dated : 10-04-2026',
    doc: 'content/documents/notices/10_04_26_publc_notc_ltr_no_38_2627doc.pdf',
  },
  {
    type: 'public',
    date: '06-10-2025',
    title:
      'Public Notice - Objections / Comments invited from various stakeholders on the Petition submitted by Tenughat Vidyut Nigam Limited (TVNL) for True-up petition for FY 2021-22 & FY 2022-23 (Falling under Third Control Period), Letter No. 941/25-26, Dated : 06-10-2025',
    doc: 'content/documents/notices/06_10_25_publc_notc_ltr_no_941_1526.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL True-up Petition for FY 2021-22 & FY 2022-23',
    doc: 'content/documents/notices/tvnl_tru_up_petn_fy2122_2223_2526.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL True Up Petition for FY 2016-17 to FY 2020-21',
    doc: 'content/documents/notices/tvnl_tru_up_petn_fy1617_2021.pdf',
  },
  {
    type: 'public',
    date: '12-07-2024',
    title:
      'Public Notice - Objections/Comments invited from various stakeholders on the Petitions for the approval of True-up for FY 2016-17 to FY 2020-21, Letter No. 378/24-25, Date: 12-07-2024',
    doc: 'content/documents/notices/12_07_24_publc_notc_ltr_no_378_2425.pdf',
  },
  {
    type: 'public',
    date: '20-06-2023',
    title:
      'Objections/Comment invited from various stakeholders on the Petition submitted by Tenughat Vidyut Nigam Limited (TVNL) for True-up petition for the first control period from FY 2012-13 to FY 2015-16, Letter No. 244/23-24, Date: 20-06-2023',
    doc: 'content/documents/notices/20_06_23_publc_notc_ltr_no_244_2324_nw.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL True Up Petition for FY 2012-13 to FY 2015-16',
    doc: 'content/documents/notices/tvnl_tru_up_petn_fy1316_fnl.pdf',
  },
  {
    type: 'public',
    date: '11-01-2023',
    title:
      'Objections/Comments invited from various stakeholders on the Petition submitted by Tenughat Vidyut Nigam Limited (TVNL) for Approval of Business Plan & ARR for MYT period from FY 2021-22 to FY 2025-26',
    doc: 'content/documents/notices/11_01_2023_pblc_notc_bus_plan_arr_fy_2122_2526_n.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL Business Plan FY 2021-22 To FY 2025-26',
    doc: 'content/documents/notices/filng_bus_plan_2122_2526_tvnl.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL MYT Petition FY 2021-22 To FY 2025-26',
    doc: 'content/documents/notices/filng_myt_2122_2526_tvnl.pdf',
  },
  {
    type: 'public',
    date: '',
    title:
      'Blacklisting of National Insurance Company Ltd., Munger Branch for two years from participation in any tender of TVNL',
    doc: 'content/documents/notices/blcklst_nicl_2022.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL Provisional Annual Accounts 2014-15',
    doc: 'content/documents/notices/tvnl_prov_annl_accnt_1415.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL Provisional Annual Accounts 2015-16',
    doc: 'content/documents/notices/tvnl_prov_annul_acc_1516.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL True Up Petition FY 2014-15 and FY 2015-16',
    doc: 'content/documents/notices/tvnl_true_up_petn_1415_1516.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL Provisional Annual Accounts 2016-17',
    doc: 'content/documents/notices/tvnl_prov_annul_acc_1617.pdf',
  },
  {
    type: 'public',
    date: '',
    title: 'TVNL MYT Petition FY 2016-17 To FY 2020-21',
    doc: 'content/documents/notices/tvnl_myt_petn_1617_2021.pdf',
  },
  {
    type: 'employment',
    date: '02-04-2026',
    title:
      'Notice for Cancellation of Walk-in Interview, Notification no. 07/26-27, dated: 02-04-26 towards engagement of Coal Mining Consultant in TVNL, Ref. No. 811/26-27, Dated : 10-09-2026',
    doc: 'content/documents/notices/cancln_notc_noti_07_2627.pdf',
  },
  {
    type: 'employment',
    date: '22-04-2026',
    title:
      'Details of Internal advertisement and application form for appointment to the post of Assistant Executive Engineer/Assistant Engineer, Employment Notice (01/26-27), Dated : 22/04/2026',
    doc: 'content/documents/notices/220426_memo_no_82_2627_dtls_app_form.pdf',
  },
  {
    type: 'employment',
    date: '22-04-2026',
    title:
      'Employment Notice (01/26-27) - Applications in prescribed format are invited from eligible employees of the Nigam (excluding JEEs) for appointment to the post of Assistant Executive Engineer/Assistant Engineer under 5% internal quota, Dated : 22-04-2026',
    doc: 'content/documents/notices/220426_memo_no_82_2627_notc.pdf',
  },
  {
    type: 'employment',
    date: '02-04-2026',
    title:
      'Walk in Interview Notification - Engagement of Coal Mining Consultant in TVNL on contractual basis, Letter No. 07/2026-27, Dated : 02-04-2026',
    doc: 'content/documents/notices/020426_walk_in_intrvw_no_07_2627.pdf',
  },
  {
    type: 'employment',
    date: '20-05-2021',
    title:
      'Notice for engagement of Doctors and ANM nurses, Letter No. 61/2021-22, Date: 20-05-2021',
    doc: 'content/documents/notices/20_05_2021_ltr_no_61_2122_emp_notc.pdf',
  },
  {
    type: 'employment',
    date: '10-10-2019',
    title:
      'Merit List of Selected candidates on the basis of Walk-in-Interview held on 30.09.2019, Ref. No. 1129/19-20, Date 10/10/19',
    doc: 'content/documents/notices/10_10_2019_rslt_med_officer.pdf',
  },
  {
    type: 'employment',
    date: '17-09-2019',
    title:
      'Walk-in-Interviews will be held on the following dates for engagement two nos. of Doctors on full time contractual basis for a period of 02 years at Tenughat Vidyut Nigam Limited, Letter No: -959/19-20,Dated-17-09-19',
    doc: 'content/documents/notices/19_09_19_walk_in_intrvw_doctors_advt.pdf',
  },
  {
    type: 'employment',
    date: '',
    title:
      'Recruitment Notice for Engagement of Doctors, Letter No. 1383/2018-19',
    doc: 'content/documents/notices/11_2_19_doc.recrt..pdf',
  },
  {
    type: 'employment',
    date: '',
    title: 'Candidates selected against advertisement Letter No. 1207/18-19',
    doc: 'content/documents/notices/4-02-2019_doctors_result.pdf',
  },
  {
    type: 'employment',
    date: '',
    title:
      'Recruitment Notice for engagement of Doctors on full time contractual basis',
    doc: 'content/documents/notices/Doctor_recruitment.pdf',
  },
  {
    type: 'employment',
    date: '09-10-2017',
    title: 'Cut of Marks for Employment Notice No 02/2016 & 01/2017',
    doc: 'content/documents/notices/09_10_17_cut_marks_tvnl.pdf',
  },
  {
    type: 'employment',
    date: '06-11-2017',
    title: 'Attachments to be submitted with joining letter',
    doc: 'content/documents/notices/06_11_17_appontmnt_joining.pdf',
  },
  {
    type: 'employment',
    date: '06-11-2017',
    title: 'Information Related to Appoinment Letter',
    doc: 'content/documents/notices/06_11_17_inf_relted_appntmnt_related.pdf',
  },
  {
    type: 'employment',
    date: '20-10-2017',
    title: 'List of candidates selected against Empl. Notice No.02/2016',
    doc: 'content/documents/notices/20_10_17_noti_emp_02.pdf',
  },
  {
    type: 'employment',
    date: '',
    title: 'List of candidates selected against Empl. Notice No.01/2017',
    doc: 'content/documents/notices/noti_emp_01.pdf',
  },
  {
    type: 'employment',
    date: '21-08-2017',
    title:
      'Revised venue and schedule for Interview/skill test for employment notice no. 01/2017 and 02/2016',
    doc: 'content/documents/notices/21_08_17_schedule.pdf',
  },
  {
    type: 'employment',
    date: '16-08-2017',
    title: 'Notice for postponement of interview/ skill test',
    doc: 'content/documents/notices/16_08_2017_notice.pdf',
  },
  {
    type: 'employment',
    date: '',
    title: 'Result of Employment Notice no 02 /2016',
    doc: 'content/documents/notices/instructions.pdf',
  },
  {
    type: 'employment',
    date: '',
    title: 'Written Test Result of Employment Notice no. 01/2017',
    doc: 'content/documents/notices/instructions.pdf',
  },
]
const recordPath = (value) => `/${String(value || '').replace(/^\/+/, '')}`
const pageRecord = (value) =>
  scrapedPages.find((record) => record.sourcePath === recordPath(value))
const recordTitle = (record) => {
  const item = Object.values(pages)
    .flatMap((page) => page.sections)
    .find((entry) => recordPath(entry.source) === record.sourcePath)
  return item ? t(item.title) : record.title
}
const recordHref = (value) => {
  const document = scrapedDocuments.find(
    (record) => record.sourcePath === recordPath(value),
  )
  const record = pageRecord(value)
  return document?.localPath || (record ? `#info/record-${record.id}` : null)
}
const recordLinks = (record) =>
  record.links
    .map((link) => {
      const href = recordHref(link.path)
      return href
        ? `<a class="text-link" href="${escapeText(href)}">${escapeText(link.label || link.path.split('/').pop())} ↗</a>`
        : ''
    })
    .join('')
const looksLikeHeading = (line) => {
  const text = line.trim()
  if (!text || text.length > 60) return false
  if (text.endsWith(':')) return true
  const letters = text.replace(/[^A-Za-z]/g, '')
  return letters.length >= 4 && letters === letters.toUpperCase()
}
const isShortCell = (line) => {
  const text = line.trim()
  return text.length <= 45 && !/[.!?]$/.test(text)
}
const isHeaderCell = (line) =>
  line.trim().length <= 45 &&
  !/\d/.test(line) &&
  !/[!?]$/.test(line.trim()) &&
  line.trim().split(/\s+/).length <= 4
const isHeaderBlock = (lines) =>
  lines.length >= 2 && lines.length <= 4 && lines.every(isHeaderCell)
const isTableRow = (lines, cols) =>
  lines.length >= 2 &&
  lines.length <= cols + 2 &&
  lines[0].length <= 45 &&
  (/^\d+\.?$/.test(lines[0]) ||
    !lines.every(isShortCell) ||
    lines.length <= cols)
const mergeRow = (lines, cols) => {
  const cells =
    lines.length >= cols
      ? [
          ...lines.slice(0, cols - 1),
          lines
            .slice(cols - 1)
            .filter((l) => l !== 'And')
            .join('; '),
        ]
      : [...lines, ...Array(cols - lines.length).fill('')]
  return cells
}
const recordSegments = (text) => {
  const blocks = String(text || '')
    .split(/\n{2,}/)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
    )
    .filter((lines) => lines.length)
  const segments = []
  for (let index = 0; index < blocks.length; index++) {
    const lines = blocks[index]
    if (isHeaderBlock(lines)) {
      const cols = lines.length
      const rows = []
      let cursor = index + 1
      while (cursor < blocks.length && isTableRow(blocks[cursor], cols)) {
        rows.push(mergeRow(blocks[cursor], cols))
        cursor++
      }
      if (rows.length >= 3) {
        segments.push({ type: 'table', header: lines, rows })
        index = cursor - 1
        continue
      }
    }
    if (lines.length === 2 && isShortCell(lines[0])) {
      const rows = []
      let cursor = index
      while (
        cursor < blocks.length &&
        blocks[cursor].length === 2 &&
        isShortCell(blocks[cursor][0])
      ) {
        rows.push(blocks[cursor])
        cursor++
      }
      if (rows.length >= 3) {
        segments.push({ type: 'table', header: null, rows })
        index = cursor - 1
        continue
      }
    }
    if (lines.length === 1 && looksLikeHeading(lines[0])) {
      segments.push({ type: 'heading', text: lines[0] })
      continue
    }
    if (lines.length === 1 && isShortCell(lines[0])) {
      const items = []
      let cursor = index
      while (
        cursor < blocks.length &&
        blocks[cursor].length === 1 &&
        isShortCell(blocks[cursor][0])
      ) {
        items.push(blocks[cursor][0])
        cursor++
      }
      if (items.length >= 3) {
        segments.push({ type: 'list', items })
        index = cursor - 1
        continue
      }
    }
    segments.push({ type: 'p', text: lines.join(' ') })
  }
  return segments
}
const segmentMarkup = (segment) => {
  if (segment.type === 'heading')
    return `<h5 class="post-heading">${escapeText(segment.text)}</h5>`
  if (segment.type === 'table')
    return `<div class="record-table-wrap"><table class="record-table">${segment.header ? `<thead><tr>${segment.header.map((cell) => `<th>${escapeText(cell)}</th>`).join('')}</tr></thead>` : ''}<tbody>${segment.rows
      .map(
        (row) =>
          `<tr>${row
            .map(
              (cell, cellIndex) =>
                `<td${cellIndex === 0 && /^\d+\.?$/.test(cell) ? ' class="num"' : ''}>${escapeText(cell)}</td>`,
            )
            .join('')}</tr>`,
      )
      .join('')}</tbody></table></div>`
  if (segment.type === 'list')
    return `<ul class="post-list">${segment.items.map((item) => `<li>${escapeText(item)}</li>`).join('')}</ul>`
  return `<p class="post-text">${escapeText(segment.text)}</p>`
}
const recordBodyMarkup = (record, title = null) => {
  const segments = recordSegments(record.text)
  if (!segments.length) return ''
  const visible =
    segments.length <= 3
      ? segments.length
      : Math.max(2, Math.ceil(segments.length / 2))
  const hidden = segments.slice(visible)
  const render = (list) => list.map(segmentMarkup).join('')
  const moreButton = `<button type="button" class="record-more-btn" aria-expanded="false" data-more="${escapeText(t(pair('Read more', 'और पढ़ें')))}" data-less="${escapeText(t(pair('Read less', 'कम पढ़ें')))}">${t(pair('Read more', 'और पढ़ें'))} ↓</button>`
  return `<article class="record-post" id="record-${escapeText(record.id)}"><header class="post-head"><div><span class="post-kicker">${t(pair('Public record', 'जन अभिलेख'))}</span>${title ? `<h4 class="post-title">${escapeText(title)}</h4>` : ''}</div><a class="post-anchor" href="#info/record-${escapeText(record.id)}" aria-label="${escapeText(t(pair('Link to this record', 'इस अभिलेख की कड़ी')))}">↗</a></header><div class="post-body">${render(segments.slice(0, visible))}${hidden.length ? `<div class="record-more"><div class="record-more-inner">${render(hidden)}</div></div>` : ''}</div>${hidden.length ? moreButton : ''}${recordLinks(record) ? `<footer class="record-links">${recordLinks(record)}</footer>` : ''}</article>`
}
const sourceRecord = (path) => {
  const record = pageRecord(path)
  if (record) return recordBodyMarkup(record)
  const href = recordHref(path)
  if (href)
    return `<a class="text-link" href="${escapeText(href)}">${t(pair('Open document ↓', 'दस्तावेज़ खोलें ↓'))}</a>`
  if (path?.startsWith('https://jserc.org/'))
    return `<a class="text-link" href="${escapeText(path)}" target="_blank" rel="noopener noreferrer">${t(pair('Read JSERC public record ↗', 'जेएसईआरसी अभिलेख पढ़ें ↗'))}</a>`
  return ''
}
const archiveMarkup = () =>
  `<div class="archive-panel"><div class="archive-head"><div><span class="eyebrow">${t(pair('Public information', 'जन सूचना'))}</span><h3>${t(pair('Information within reach.', 'जानकारी आपकी पहुँच में।'))}</h3></div><strong>${scrapedPages.length} <small>${t(pair('public records', 'जन अभिलेख'))}</small></strong></div><div class="archive-grid">${scrapedPages
    .map((record) => recordBodyMarkup(record, recordTitle(record)))
    .join(
      '',
    )}</div>${scrapedDocuments.length ? `<div class="archive-documents"><strong>${t(pair('Locally stored public documents', 'स्थानीय रूप से संग्रहीत जन दस्तावेज़'))}</strong>${scrapedDocuments.map((document) => `<a class="document-row" href="${escapeText(document.localPath)}" download><span>${escapeText(document.label)}</span><small>LOCAL PDF ↓</small></a>`).join('')}</div>` : ''}</div>`
const TENDER_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const tenderDue = (due) => {
  const match = String(due).match(
    /(\d{2})-(\d{2})-(\d{4})\s*\|\s*(\d{2}):(\d{2})/,
  )
  if (!match) return null
  return new Date(+match[3], +match[2] - 1, +match[1], +match[4], +match[5])
}
const tenderDueLabel = (due) => {
  const date = tenderDue(due)
  return date
    ? `${String(date.getDate()).padStart(2, '0')} ${TENDER_MONTHS[date.getMonth()]} ${date.getFullYear()} · ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    : due
}
const tenderFY = (record) => {
  const nitMatch = String(record.nit).match(
    /RAN\/\s*(\d{2,4})\s*[–-]\s*(\d{2,4})/,
  )
  if (nitMatch) {
    const start = +nitMatch[1] < 100 ? 2000 + +nitMatch[1] : +nitMatch[1]
    const end = +nitMatch[2] < 100 ? +nitMatch[2] : +nitMatch[2] % 100
    return `${start}-${String(end).padStart(2, '0')}`
  }
  const due = tenderDue(record.due)
  if (!due) return '—'
  const start = due.getMonth() >= 3 ? due.getFullYear() : due.getFullYear() - 1
  return `${start}-${String((start + 1) % 100).padStart(2, '0')}`
}
const tenderYears = [...new Set(tenders.map(tenderFY))].sort().reverse()
const tenderMarkup = () =>
  `<div class="filterbar"><input id="tender-search" type="search" aria-label="${t(pair('Search NIT or subject', 'एनआईटी या विषय खोजें'))}" placeholder="${t(pair('Search NIT number or subject…', 'एनआईटी संख्या या विषय खोजें…'))}"><select id="tender-fy" aria-label="${t(pair('Financial year', 'वित्तीय वर्ष'))}"><option value="all">${t(pair('All financial years', 'सभी वित्तीय वर्ष'))}</option>${tenderYears.map((fy) => `<option value="${fy}">FY ${fy}</option>`).join('')}</select><select id="tender-category" aria-label="${t(pair('Tender category', 'निविदा श्रेणी'))}"><option value="all">${t(pair('All categories', 'सभी श्रेणियाँ'))}</option><option value="works">${t(pair('Works & services', 'कार्य एवं सेवाएँ'))}</option><option value="procurement">${t(pair('Procurement', 'खरीद'))}</option><option value="coal">${t(pair('Coal & ash', 'कोयला एवं राख'))}</option><option value="it">${t(pair('IT', 'सूचना प्रौद्योगिकी'))}</option><option value="solar">${t(pair('Solar', 'सौर'))}</option></select></div><div id="tender-results" aria-live="polite"></div>`
const renderTenders = () => {
  const query = document
    .querySelector('#tender-search')
    .value.toLowerCase()
    .trim()
  const category = document.querySelector('#tender-category').value
  const fy = document.querySelector('#tender-fy').value
  const matches = tenders.filter(
    (record) =>
      (category === 'all' || record.category === category) &&
      (fy === 'all' || tenderFY(record) === fy) &&
      `${record.nit} ${record.title}`.toLowerCase().includes(query),
  )
  const now = Date.now()
  document.querySelector('#tender-results').innerHTML = matches.length
    ? `<p class="tender-count">${matches.length} ${t(pair('live tender notices from tvnl.in', 'tvnl.in से लाइव निविदा सूचनाएँ'))}</p><div class="record-table-wrap"><table class="record-table tender-table"><thead><tr><th>${t(pair('NIT No.', 'एनआईटी सं.'))}</th><th>${t(pair('Subject', 'विषय'))}</th><th>${t(pair('Bid due', 'बोली अंतिम तिथि'))}</th><th>${t(pair('Status', 'स्थिति'))}</th><th>${t(pair('Documents', 'दस्तावेज़'))}</th></tr></thead><tbody>${matches
        .map((record) => {
          const due = tenderDue(record.due)
          const open = due ? due.getTime() >= now : null
          return `<tr><td class="num">${escapeText(record.nit)}</td><td class="tender-subject">${escapeText(record.title)}</td><td class="num">${escapeText(tenderDueLabel(record.due))}</td><td>${open === null ? '' : `<span class="tender-status ${open ? 'is-open' : 'is-closed'}">${t(open ? pair('Open', 'खुली') : pair('Closed', 'बंद'))}</span>`}</td><td class="tender-docs">${record.links
            .map(
              (link) =>
                `<a href="${escapeText(link.href)}" target="_blank" rel="noopener noreferrer">${escapeText(link.label)} ↗</a>`,
            )
            .join('')}</td></tr>`
        })
        .join('')}</tbody></table></div>`
    : `<p class="empty">${t(pair('No matching records. Try another NIT number or category.', 'कोई मेल खाता अभिलेख नहीं मिला। दूसरी एनआईटी संख्या या श्रेणी आज़माएँ।'))}</p>`
}
const NOTICE_SECTIONS = {
  extensions: 'extension',
  corrigenda: 'corrigendum',
  cancellations: 'cancellation',
  news: 'all',
}
const NOTICE_LABEL = {
  extension: pair('Extension', 'अवधि विस्तार'),
  corrigendum: pair('Corrigendum', 'शुद्धिपत्र'),
  cancellation: pair('Cancellation', 'निरस्तीकरण'),
}
const noticeDate = (record) => record.rev || record.prev
const noticeFY = (record) =>
  tenderFY({ nit: record.nit, due: noticeDate(record) })
const noticeYears = [...new Set(notices.map(noticeFY))].sort().reverse()
const noticeMarkup = (id) =>
  `<div class="filterbar"><input id="notice-search-${id}" type="search" aria-label="${t(pair('Search NIT or subject', 'एनआईटी या विषय खोजें'))}" placeholder="${t(pair('Search NIT number or subject…', 'एनआईटी संख्या या विषय खोजें…'))}"><select id="notice-fy-${id}" aria-label="${t(pair('Financial year', 'वित्तीय वर्ष'))}"><option value="all">${t(pair('All financial years', 'सभी वित्तीय वर्ष'))}</option>${noticeYears.map((fy) => `<option value="${fy}">FY ${fy}</option>`).join('')}</select></div><div id="notice-results-${id}" aria-live="polite"></div>`
const renderNotices = (id) => {
  const query = document
    .querySelector(`#notice-search-${id}`)
    .value.toLowerCase()
    .trim()
  const fy = document.querySelector(`#notice-fy-${id}`).value
  const type = NOTICE_SECTIONS[id]
  const matches = notices.filter(
    (record) =>
      (type === 'all' || record.type === type) &&
      (fy === 'all' || noticeFY(record) === fy) &&
      `${record.nit} ${record.subject}`.toLowerCase().includes(query),
  )
  const dateLabel = (value) =>
    value ? escapeText(tenderDueLabel(value.replace(/\s*Hrs\s*$/i, ''))) : '—'
  const docCell = (record) =>
    record.doc
      ? `<a href="${escapeText(record.doc)}" target="_blank" rel="noopener noreferrer">${escapeText(t(pair('Notice', 'सूचना')))} ↗</a>`
      : ''
  const head =
    id === 'extensions'
      ? `<th>${t(pair('NIT No.', 'एनआईटी सं.'))}</th><th>${t(pair('Subject', 'विषय'))}</th><th>${t(pair('Was due', 'पूर्व तिथि'))}</th><th>${t(pair('Extended to', 'विस्तारित तिथि'))}</th><th>${t(pair('Document', 'दस्तावेज़'))}</th>`
      : id === 'news'
        ? `<th>${t(pair('Type', 'प्रकार'))}</th><th>${t(pair('NIT No.', 'एनआईटी सं.'))}</th><th>${t(pair('Subject', 'विषय'))}</th><th>${t(pair('Updated', 'अद्यतन'))}</th><th>${t(pair('Document', 'दस्तावेज़'))}</th>`
        : `<th>${t(pair('NIT No.', 'एनआईटी सं.'))}</th><th>${t(pair('Subject', 'विषय'))}</th><th>${t(pair('Document', 'दस्तावेज़'))}</th>`
  const row = (record) =>
    id === 'extensions'
      ? `<tr><td class="num">${escapeText(record.nit)}</td><td class="tender-subject">${escapeText(record.subject)}</td><td class="num">${dateLabel(record.prev)}</td><td class="num">${dateLabel(record.rev)}</td><td class="tender-docs">${docCell(record)}</td></tr>`
      : id === 'news'
        ? `<tr><td><span class="notice-type is-${record.type}">${t(NOTICE_LABEL[record.type])}</span></td><td class="num">${escapeText(record.nit)}</td><td class="tender-subject">${escapeText(record.subject)}</td><td class="num">${dateLabel(noticeDate(record))}</td><td class="tender-docs">${docCell(record)}</td></tr>`
        : `<tr><td class="num">${escapeText(record.nit)}</td><td class="tender-subject">${escapeText(record.subject)}</td><td class="tender-docs">${docCell(record)}</td></tr>`
  document.querySelector(`#notice-results-${id}`).innerHTML = matches.length
    ? `<p class="tender-count">${matches.length} ${t(pair('notices', 'सूचनाएँ'))}</p><div class="record-table-wrap"><table class="record-table tender-table"><thead><tr>${head}</tr></thead><tbody>${matches.map(row).join('')}</tbody></table></div>`
    : `<p class="empty">${t(pair('No matching records. Try another NIT number or category.', 'कोई मेल खाता अभिलेख नहीं मिला। दूसरी एनआईटी संख्या या श्रेणी आज़माएँ।'))}</p>`
}
const BOARD_SECTIONS = {
  circulars: 'circulars',
  updates: 'updates',
  public: 'public',
  employment: 'employment',
}
const boardDate = (record) => {
  const match = String(record.date).match(/(\d{2})-(\d{2})-(\d{4})/)
  return match ? new Date(+match[3], +match[2] - 1, +match[1]) : null
}
const boardFY = (record) => {
  const date = boardDate(record)
  if (!date) return '—'
  const start =
    date.getMonth() >= 3 ? date.getFullYear() : date.getFullYear() - 1
  return `${start}-${String((start + 1) % 100).padStart(2, '0')}`
}
const boardYears = [
  ...new Set(boardNotices.map(boardFY).filter((fy) => fy !== '—')),
]
  .sort()
  .reverse()
const boardMarkup = (id) =>
  `<div class="filterbar"><input id="board-search-${id}" type="search" aria-label="${t(pair('Search notices', 'सूचनाएँ खोजें'))}" placeholder="${t(pair('Search by title…', 'शीर्षक से खोजें…'))}"><select id="board-fy-${id}" aria-label="${t(pair('Financial year', 'वित्तीय वर्ष'))}"><option value="all">${t(pair('All financial years', 'सभी वित्तीय वर्ष'))}</option>${boardYears.map((fy) => `<option value="${fy}">FY ${fy}</option>`).join('')}</select></div><div id="board-results-${id}" aria-live="polite"></div>`
const renderBoard = (id) => {
  const query = document
    .querySelector(`#board-search-${id}`)
    .value.toLowerCase()
    .trim()
  const fy = document.querySelector(`#board-fy-${id}`).value
  const matches = boardNotices.filter(
    (record) =>
      record.type === BOARD_SECTIONS[id] &&
      (fy === 'all' || boardFY(record) === fy) &&
      record.title.toLowerCase().includes(query),
  )
  const dateLabel = (record) => {
    const date = boardDate(record)
    return date
      ? `${String(date.getDate()).padStart(2, '0')} ${TENDER_MONTHS[date.getMonth()]} ${date.getFullYear()}`
      : '—'
  }
  const head = `<th class="num">${t(pair('Sl. No.', 'क्र. सं.'))}</th><th>${t(pair('Title', 'शीर्षक'))}</th><th>${t(pair('Dated', 'दिनांक'))}</th><th>${t(pair('Document', 'दस्तावेज़'))}</th>`
  const row = (record, index) =>
    `<tr><td class="num">${index + 1}</td><td class="tender-subject">${escapeText(record.title)}</td><td class="num">${dateLabel(record)}</td><td class="tender-docs"><a href="${escapeText(record.doc)}" target="_blank" rel="noopener noreferrer">${escapeText(t(pair('Document', 'दस्तावेज़')))} ↗</a></td></tr>`
  document.querySelector(`#board-results-${id}`).innerHTML = matches.length
    ? `<p class="tender-count">${matches.length} ${t(pair('notices', 'सूचनाएँ'))}</p><div class="record-table-wrap"><table class="record-table tender-table"><thead><tr>${head}</tr></thead><tbody>${matches.map(row).join('')}</tbody></table></div>`
    : `<p class="empty">${t(pair('No matching records. Try a different search.', 'कोई मेल खाता अभिलेख नहीं मिला। दूसरी खोज आज़माएँ।'))}</p>`
}
const ASH_MONTHS = [
  {
    month: pair('April 2026', 'अप्रैल 2026'),
    generated: '0.540',
    utilised: '0.603',
    pct: '111.6',
  },
  {
    month: pair('May 2026', 'मई 2026'),
    generated: '0.592',
    utilised: '0.343',
    pct: '58.0',
  },
  {
    month: pair('June 2026', 'जून 2026'),
    generated: '0.553',
    utilised: '0.479',
    pct: '86.6',
  },
]
const FORMAT_DOCS = [
  {
    label: pair(
      'Bidder form — user ID & password request',
      'बोलीदाता प्रपत्र — उपयोगकर्ता आईडी एवं पासवर्ड अनुरोध',
    ),
    href: 'content/documents/19_02_18_bidder_id_password.pdf',
  },
  {
    label: pair(
      'Vendor bidding manual for open tenders',
      'खुली निविदाओं हेतु विक्रेता बोली मार्गदर्शिका',
    ),
    href: 'content/documents/TVNL_Vendor_Manual_for_Open_Tender.pdf',
  },
  {
    label: pair(
      'Bank guarantee format for EMD',
      'अर्नेस्ट मनी डिपॉज़िट हेतु बैंक गारंटी प्रारूप',
    ),
    href: 'content/documents/bg_emd_format.pdf',
  },
]
const DESK_LINKS = [
  {
    label: pair('National Portal of India', 'भारत का राष्ट्रीय पोर्टल'),
    href: 'https://www.india.gov.in/',
  },
  {
    label: pair('Government of India — MyGov', 'भारत सरकार — माईगव'),
    href: 'https://www.mygov.in/',
  },
  {
    label: pair('Ministry of Coal', 'कोयला मंत्रालय'),
    href: 'https://coal.nic.in/',
  },
  {
    label: pair('Government of Jharkhand', 'झारखंड सरकार'),
    href: 'http://www.jharkhand.gov.in/',
  },
  {
    label: pair('JSERC — TVNL filings', 'जेएसईआरसी — टीवीएनएल दाखिले'),
    href: 'https://jserc.org/tvnl.aspx',
  },
  {
    label: pair('Jharkhand eProcurement', 'झारखंड ई-प्रोक्योरमेंट'),
    href: 'https://jharkhandtenders.gov.in',
  },
]
const DESK = {
  grievance: {
    span: 3,
    tag: pair('Service', 'सेवा'),
    body: () =>
      `<form class="desk-form" id="grievance-form"><div class="form-grid"><label>${t(pair('Name', 'नाम'))}<input name="gname" required autocomplete="name"></label><label>${t(pair('E-mail', 'ई-मेल'))}<input name="gemail" type="email" autocomplete="email"></label><label>${t(pair('Mobile No.', 'मोबाइल सं.'))}<input name="gmobile" inputmode="tel" autocomplete="tel"></label><label>${t(pair('Subject', 'विषय'))}<input name="gsubject" required></label><label class="is-full">${t(pair('Message', 'संदेश'))}<textarea name="gmessage" rows="3" required></textarea></label><label class="is-full">${t(pair('Address', 'पता'))}<textarea name="gaddress" rows="2"></textarea></label></div><div class="desk-actions"><button type="submit">${t(pair('Submit grievance', 'शिकायत दर्ज करें'))} →</button><span class="desk-note">${t(pair('Demonstration only — nothing is transmitted.', 'केवल प्रदर्शन — कोई जानकारी प्रेषित नहीं होती।'))}</span></div><div class="portal-output" id="grievance-output" role="status"></div></form>`,
  },
  ash: {
    span: 3,
    tag: pair('Report data', 'रिपोर्ट आंकड़े'),
    body: () =>
      `<div class="ash-head"><strong>84.6%</strong><span>${t(pair('of ash utilised · FY 2026-27 to date', 'राख उपयोग · वित्तीय वर्ष 2026-27 अब तक'))}</span></div><div class="record-table-wrap"><table class="record-table tender-table"><thead><tr><th>${t(pair('Month', 'माह'))}</th><th class="num">${t(pair('Generated (LMT)', 'उत्पादन (एलएमटी)'))}</th><th class="num">${t(pair('Utilised (LMT)', 'उपयोग (एलएमटी)'))}</th><th class="num">${t(pair('Utilisation', 'उपयोग'))}</th></tr></thead><tbody>${ASH_MONTHS.map((row) => `<tr><td>${t(row.month)}</td><td class="num">${row.generated}</td><td class="num">${row.utilised}</td><td class="num">${row.pct}%</td></tr>`).join('')}</tbody></table></div><a class="text-link" href="content/documents/ash_disposal_report_apr_jun_2026.pdf" target="_blank" rel="noopener noreferrer">${t(pair('Full report (PDF)', 'पूरी रिपोर्ट (पीडीएफ)'))} ↗</a>`,
  },
  careers: {
    span: 2,
    tag: pair('Opportunity', 'अवसर'),
    body: () => {
      const jobs = boardNotices.filter((record) => record.type === 'employment')
      const latest = jobs[0]
      return `<div class="desk-stat"><strong>${jobs.length}</strong><span>${t(pair('published employment notices', 'प्रकाशित रोजगार सूचनाएँ'))}</span></div>${latest ? `<p class="desk-latest"><span class="eyebrow">${t(pair('Latest', 'नवीनतम'))}</span>${escapeText(latest.title)}</p>` : ''}<a class="text-link" href="#notices/employment">${t(pair('View all employment notices', 'सभी रोजगार सूचनाएँ देखें'))} →</a>`
    },
  },
  formats: {
    span: 2,
    tag: pair('Downloads', 'डाउनलोड'),
    body: () =>
      `<div class="desk-docs">${FORMAT_DOCS.map((doc) => `<a class="document-row" href="${escapeText(doc.href)}" download><span>${escapeText(t(doc.label))}</span><small>PDF ↓</small></a>`).join('')}</div>`,
  },
  links: {
    span: 3,
    tag: pair('External', 'बाहरी'),
    body: () =>
      `<div class="desk-docs">${DESK_LINKS.map((link) => `<a class="document-row" href="${escapeText(link.href)}" target="_blank" rel="noopener noreferrer"><span>${escapeText(t(link.label))}</span><small>${escapeText(link.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))} ↗</small></a>`).join('')}</div>`,
  },
  'employee-section': {
    span: 3,
    tag: pair('Internal', 'आंतरिक'),
    body: () =>
      `<p>${t(pair('Employee services and HR communications are routed through the internal portal. A demonstration workspace is available on this site.', 'कर्मचारी सेवाएँ और मानव संसाधन संचार आंतरिक पोर्टल के माध्यम से संचालित होते हैं। इस साइट पर एक प्रदर्शन कार्यक्षेत्र उपलब्ध है।'))}</p><a class="text-link" href="#login/employee">${t(pair('Open the employee portal demo', 'कर्मचारी पोर्टल डेमो खोलें'))} →</a>`,
  },
  rti: {
    span: 2,
    tag: pair('Disclosure', 'प्रकटीकरण'),
    body: () =>
      `<p>${t(pair('Organisational charts, published policies, annual reports and contact details are maintained in the public record archive of this site.', 'संगठनात्मक चार्ट, प्रकाशित नीतियाँ, वार्षिक रिपोर्ट और संपर्क विवरण इस साइट के जन अभिलेखागार में रखे गए हैं।'))}</p><a class="text-link" href="#info/documents">${t(pair('Browse documents & reports', 'दस्तावेज़ और रिपोर्ट देखें'))} →</a>`,
  },
  documents: {
    span: 6,
    tag: pair('Archive', 'अभिलेखागार'),
    body: () => archiveMarkup(),
  },
}
const deskTile = (item, index) => {
  const meta = DESK[item.id]
  return `<article class="desk-tile${meta?.span === 6 ? ' is-wide' : ''}" id="${escapeText(item.id)}" style="--span:${meta?.span || 2}"><div class="desk-counter"><span>${String(index + 1).padStart(2, '0')}</span><span class="desk-tag">${escapeText(t(meta?.tag || pair('Desk', 'डेस्क')))}</span></div><h3>${escapeText(t(item.title))}</h3><p class="desk-desc">${escapeText(t(item.body))}</p>${meta ? meta.body() : ''}</article>`
}
const portalMarkup = (id) =>
  `<div class="portal"><span class="demo-label">${t(pair('Demo screen · Internal portal layout', 'डेमो स्क्रीन · आंतरिक पोर्टल लेआउट'))}</span>${id === 'payment' ? `<label>${t(pair('Sample tender', 'नमूना निविदा'))}<select id="payment-tender"><option>DEMO-TENDER-001</option><option>DEMO-TENDER-002</option></select></label><div class="document-row"><strong>${t(pair('Illustrative amount', 'उदाहरण राशि'))}</strong><span>₹1,000</span></div>` : ''}<button type="button" data-portal="${id}">${t(id === 'employee' ? pair('Open employee demo', 'कर्मचारी डेमो खोलें') : id === 'srm' ? pair('Open supplier demo', 'आपूर्तिकर्ता डेमो खोलें') : pair('Review demo payment', 'डेमो भुगतान की समीक्षा करें'))} →</button><div class="portal-output" id="output-${id}" role="status"></div></div>`
const renderPortal = (id, stage = 'open') => {
  const target = document.querySelector(`#output-${id}`)
  if (id === 'employee')
    target.innerHTML = `<h3>${t(pair('Welcome, Demo Employee', 'स्वागत है, डेमो कर्मचारी'))}</h3><div class="portal-grid"><article>${t(pair('Sample leave balance', 'नमूना अवकाश शेष'))}<strong>12</strong>${t(pair('days', 'दिन'))}</article><article>${t(pair('Sample requests', 'नमूना अनुरोध'))}<strong>2</strong>${t(pair('awaiting review', 'समीक्षा की प्रतीक्षा में'))}</article></div><p>${t(pair('Employee ID: DEMO-001 · Department: Administration', 'कर्मचारी पहचान: DEMO-001 · विभाग: प्रशासन'))}</p>`
  if (id === 'srm')
    target.innerHTML =
      stage === 'saved'
        ? `<h3>${t(pair('Demo bid saved locally for this visit', 'इस सत्र के लिए डेमो बोली सहेजी गई'))}</h3><p>${t(pair('Reference: DEMO-BID-001. No bid has been transmitted to TVNL.', 'संदर्भ: DEMO-BID-001। टीवीएनएल को कोई बोली नहीं भेजी गई है।'))}</p>`
        : `<h3>${t(pair('Supplier workspace', 'आपूर्तिकर्ता कार्यक्षेत्र'))}</h3><p>DEMO-TENDER-001 · ${t(pair('Sample equipment supply', 'नमूना उपकरण आपूर्ति'))}</p><button data-stage="saved" data-portal="srm">${t(pair('Save demo bid', 'डेमो बोली सहेजें'))}</button>`
  if (id === 'payment')
    target.innerHTML =
      stage === 'receipt'
        ? `<h3>${t(pair('Demo receipt', 'डेमो रसीद'))}</h3><p>DEMO-RECEIPT-001 · ₹1,000</p><p>${t(pair('Simulated transaction. No money was collected.', 'अनुकरणित लेनदेन। कोई धनराशि नहीं ली गई।'))}</p>`
        : `<h3>${t(pair('Review demo payment', 'डेमो भुगतान की समीक्षा'))}</h3><p>${escapeText(document.querySelector('#payment-tender').value)} · ₹1,000</p><button data-stage="receipt" data-portal="payment">${t(pair('Generate demo receipt', 'डेमो रसीद बनाएँ'))}</button>`
}
const renderPageSection = (key, item) => {
  const extras = [
    key === 'login' ? portalMarkup(item.id) : '',
    item.id === 'tender-notices' ? tenderMarkup() : '',
    NOTICE_SECTIONS[item.id] ? noticeMarkup(item.id) : '',
    BOARD_SECTIONS[item.id] ? boardMarkup(item.id) : '',
    item.id === 'gallery'
      ? `<div class="updates"><img src="assets/plant-sl1.jpg" alt="${t(pair('Tenughat Thermal Power Station buildings', 'तेनुघाट ताप विद्युत केंद्र के भवन'))}" loading="lazy"><img src="assets/plant-sl2.jpg" alt="${t(pair('Tenughat power station switchyard', 'तेनुघाट विद्युत केंद्र स्विचयार्ड'))}" loading="lazy"></div>`
      : '',
    item.id === 'documents' ? archiveMarkup() : '',
    item.source ? sourceRecord(item.source) : '',
    item.id === 'links'
      ? `<div class="document-row"><a href="https://jserc.org/tvnl.aspx" target="_blank" rel="noopener noreferrer">${t(pair('JSERC — TVNL filings ↗', 'जेएसईआरसी — टीवीएनएल दाखिले ↗'))}</a><a href="https://jharkhandtenders.gov.in" target="_blank" rel="noopener noreferrer">${t(pair('Jharkhand eProcurement ↗', 'झारखंड ई-प्रोक्योरमेंट ↗'))}</a></div>`
      : '',
  ].join('')
  const figure = item.image
    ? `<figure class="content-figure ${item.image.mode || 'wide'}"><img src="${escapeText(item.image.src)}" alt="${escapeText(t(item.image.alt))}" loading="lazy">${item.image.caption ? `<figcaption>${t(item.image.caption)}</figcaption>` : ''}</figure>`
    : ''
  const paragraphs = t(item.body)
    .split('\n\n')
    .map((text) => `<p>${text}</p>`)
    .join('')
  const portrait = item.image?.mode === 'portrait' ? figure : ''
  const wide = item.image?.mode === 'portrait' ? '' : figure
  return `<section class="content-block" id="${escapeText(item.id)}"><h2>${t(item.title)}</h2>${portrait}${paragraphs}${wide}${extras}</section>`
}
const renderDetail = (key) => {
  const page = pages[key]
  document.querySelector('#detail-view').innerHTML =
    `<div class="view-banner"><div class="eyebrow">TVNL / ${escapeText(t(page.title))}</div><h1>${t(page.title)}</h1><p>${t(page.intro)}</p></div><nav class="subnav" aria-label="${t(pair('Section navigation', 'अनुभाग नेविगेशन'))}">${page.sections.map((item) => `<a href="#${key}/${item.id}">${t(item.title)}</a>`).join('')}</nav>${key === 'info' ? `<div class="desk-grid">${page.sections.map((item, index) => deskTile(item, index)).join('')}</div>` : `<div class="content-sections">${page.sections.map((item) => renderPageSection(key, item)).join('')}</div>`}`
  if (key === 'tenders') {
    renderTenders()
    document
      .querySelector('#tender-search')
      .addEventListener('input', renderTenders)
    document
      .querySelector('#tender-category')
      .addEventListener('change', renderTenders)
    document
      .querySelector('#tender-fy')
      .addEventListener('change', renderTenders)
  }
  Object.keys(NOTICE_SECTIONS).forEach((id) => {
    if (!document.querySelector(`#notice-results-${id}`)) return
    renderNotices(id)
    document
      .querySelector(`#notice-search-${id}`)
      .addEventListener('input', () => renderNotices(id))
    document
      .querySelector(`#notice-fy-${id}`)
      .addEventListener('change', () => renderNotices(id))
  })
  Object.keys(BOARD_SECTIONS).forEach((id) => {
    if (!document.querySelector(`#board-results-${id}`)) return
    renderBoard(id)
    document
      .querySelector(`#board-search-${id}`)
      .addEventListener('input', () => renderBoard(id))
    document
      .querySelector(`#board-fy-${id}`)
      .addEventListener('change', () => renderBoard(id))
  })
}
const applyLanguage = () => {
  document.documentElement.lang = language
  document.querySelectorAll('[data-en][data-hi]').forEach((element) => {
    element.textContent = element.dataset[language].replace(/\\n/g, '\n')
    element.style.whiteSpace = 'pre-line'
  })
  document.querySelectorAll('#main-nav a').forEach((link) => {
    const key = link.hash.slice(1)
    link.textContent =
      key === 'home' ? t(pair('Home', 'मुखपृष्ठ')) : t(pages[key].title)
  })
  document
    .querySelector('#language')
    .setAttribute(
      'aria-label',
      language === 'en' ? 'Switch to Hindi' : 'Switch to English',
    )
  document
    .querySelector('#open-search')
    .setAttribute('aria-label', t(pair('Search website', 'वेबसाइट खोजें')))
  document
    .querySelector('#close-search')
    .setAttribute('aria-label', t(pair('Close search', 'खोज बंद करें')))
  document.querySelector('#site-search').placeholder = t(
    pair('Try “tender”, “ash” or “contact”', '“निविदा”, “राख” या “संपर्क” खोजें'),
  )
  document.querySelector('.seal').alt = t(
    pair('Government of Jharkhand', 'झारखंड सरकार'),
  )
  document.querySelector('#plant-photo').alt = t(
    pair('Tenughat Thermal Power Station', 'तेनुघाट ताप विद्युत केंद्र'),
  )
}
const route = (keepScroll = false) => {
  const [requested, anchor] = location.hash.slice(1).split('/')
  const key = pages[requested] ? requested : 'home'
  const changed = currentView !== key
  currentView = key
  document.querySelector('#home-view').hidden = key !== 'home'
  document.querySelector('#detail-view').hidden = key === 'home'
  if (key !== 'home') renderDetail(key)
  document
    .querySelectorAll('#main-nav a')
    .forEach((link) =>
      link.hash === `#${key}`
        ? link.setAttribute('aria-current', 'page')
        : link.removeAttribute('aria-current'),
    )
  document.title = `${key === 'home' ? t(pair('Energy for Jharkhand', 'झारखंड की ऊर्जा')) : t(pages[key].title)} · TVNL`
  if (!keepScroll)
    requestAnimationFrame(() => {
      const element = anchor ? document.getElementById(anchor) : null
      if (element) {
        if (element.tagName === 'DETAILS') element.open = true
        if (element.tagName === 'DETAILS') {
          element.setAttribute('tabindex', '-1')
          element.focus({ preventScroll: true })
        }
        element.scrollIntoView({ behavior: 'instant' })
      } else if (changed || !anchor)
        window.scrollTo({ top: 0, behavior: 'instant' })
    })
}
const search = () => {
  const query = document
    .querySelector('#site-search')
    .value.trim()
    .toLowerCase()
  const records = [
    ...Object.entries(pages).flatMap(([key, page]) =>
      page.sections.map((item) => ({ key, page, item })),
    ),
    ...scrapedPages.map((record) => ({
      key: 'info',
      page: pages.info,
      item: {
        id: `record-${record.id}`,
        title: pair(recordTitle(record), recordTitle(record)),
        body: pair(record.text, record.text),
      },
    })),
  ].filter(({ item }) =>
    `${item.title.en} ${item.title.hi} ${item.body.en} ${item.body.hi}`
      .toLowerCase()
      .includes(query),
  )
  document.querySelector('#search-results').innerHTML = records.length
    ? records
        .slice(0, 15)
        .map(
          ({ key, page, item }) =>
            `<a href="#${key}/${escapeText(item.id)}">${escapeText(t(item.title))}<small>${t(page.title)}</small></a>`,
        )
        .join('')
    : `<p class="empty">${t(pair('No results found. Try another search.', 'कोई परिणाम नहीं मिला। अन्य शब्द से खोजें।'))}</p>`
}
let thermal3DInstance = null
const initThermal3D = () => {
  return { setChapterView: () => {} }
}
const _unusedInitThermal3D = () => {
  try {
    const renderers = canvases.map((canvas) => {
      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x161c24, 0.015)

      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
      camera.position.set(0, 10, 30)

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

      const resize = () => {
        const parent = canvas.parentElement
        if (!parent) return
        const width = parent.clientWidth
        const height = parent.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height, false)
      }
      resize()
      window.addEventListener('resize', resize)

      scene.add(new THREE.AmbientLight(0xffffff, 0.8))
      const pointLight = new THREE.PointLight(0x628ad1, 3, 40)
      pointLight.position.set(0, 10, 10)
      scene.add(pointLight)

      const mainGroup = new THREE.Group()
      scene.add(mainGroup)

      // 1. Concentric Energy Rings
      const ringGroup = new THREE.Group()
      mainGroup.add(ringGroup)

      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0x628ad1,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xd3e7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      })
      const ringMat3 = new THREE.MeshBasicMaterial({
        color: 0xff9900,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      })

      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(8, 0.15, 16, 64),
        ringMat1,
      )
      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(12, 0.1, 16, 64),
        ringMat2,
      )
      const ring3 = new THREE.Mesh(
        new THREE.TorusGeometry(5, 0.2, 16, 48),
        ringMat3,
      )

      ring1.rotation.x = Math.PI / 3
      ring2.rotation.y = Math.PI / 4
      ring3.rotation.z = Math.PI / 6

      ringGroup.add(ring1)
      ringGroup.add(ring2)
      ringGroup.add(ring3)

      // 2. High-Density Organic Particle Wave Grid (40x40 = 1,600 particles)
      const cols = 45
      const rows = 40
      const numParticles = cols * rows
      const particleGeo = new THREE.BufferGeometry()
      const posArray = new Float32Array(numParticles * 3)
      const colArray = new Float32Array(numParticles * 3)

      const basePos = new Float32Array(numParticles * 3)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i * rows + j
          const u = (i / cols - 0.5) * 32
          const v = (j / rows - 0.5) * 24

          posArray[index * 3] = u
          posArray[index * 3 + 1] = 0
          posArray[index * 3 + 2] = v

          basePos[index * 3] = u
          basePos[index * 3 + 1] = 0
          basePos[index * 3 + 2] = v

          // Color gradient: Cyan -> Blue -> Amber
          const ratio = i / cols
          if (ratio < 0.6) {
            colArray[index * 3] = 0.38 + ratio * 0.4
            colArray[index * 3 + 1] = 0.54 + ratio * 0.3
            colArray[index * 3 + 2] = 0.82 + ratio * 0.18
          } else {
            colArray[index * 3] = 1.0
            colArray[index * 3 + 1] = 0.6 - (ratio - 0.6) * 0.8
            colArray[index * 3 + 2] = 0.1
          }
        }
      }

      particleGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3),
      )
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3))

      const particleMat = new THREE.PointsMaterial({
        size: 0.28,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
      })

      const particleGrid = new THREE.Points(particleGeo, particleMat)
      mainGroup.add(particleGrid)

      // Camera Lerp Targets per Chapter
      const targetCamPos = new THREE.Vector3(0, 10, 30)
      const targetLookAt = new THREE.Vector3(0, 0, 0)
      const currentLookAt = new THREE.Vector3(0, 0, 0)
      let waveFreq = 1.0
      let targetFreq = 1.0

      const chapterViews = [
        {
          pos: new THREE.Vector3(0, 12, 30),
          look: new THREE.Vector3(0, 0, 0),
          freq: 1.0,
        },
        {
          pos: new THREE.Vector3(-10, 8, 20),
          look: new THREE.Vector3(-4, 0, 0),
          freq: 1.8,
        },
        {
          pos: new THREE.Vector3(8, 6, 18),
          look: new THREE.Vector3(4, 0, 0),
          freq: 2.4,
        },
        {
          pos: new THREE.Vector3(0, 20, 36),
          look: new THREE.Vector3(0, 0, 0),
          freq: 1.2,
        },
        {
          pos: new THREE.Vector3(-12, 10, 22),
          look: new THREE.Vector3(-6, -2, 0),
          freq: 1.5,
        },
        {
          pos: new THREE.Vector3(12, 12, 24),
          look: new THREE.Vector3(6, 0, 0),
          freq: 0.8,
        },
        {
          pos: new THREE.Vector3(0, 8, 26),
          look: new THREE.Vector3(0, 0, 0),
          freq: 3.0,
        },
        {
          pos: new THREE.Vector3(0, 14, 32),
          look: new THREE.Vector3(0, 0, 0),
          freq: 1.0,
        },
      ]

      const setChapterView = (idx) => {
        const view = chapterViews[idx] || chapterViews[0]
        targetCamPos.copy(view.pos)
        targetLookAt.copy(view.look)
        targetFreq = view.freq
      }

      let clock = 0
      let reqId
      const animate = () => {
        reqId = requestAnimationFrame(animate)
        clock += 0.02
        waveFreq += (targetFreq - waveFreq) * 0.05

        // Rotate rings dynamically
        ring1.rotation.x += 0.005
        ring1.rotation.y += 0.008
        ring2.rotation.y -= 0.006
        ring2.rotation.z += 0.004
        ring3.rotation.z += 0.01

        // Animate organic 3D particle wave heights
        const positions = particleGeo.attributes.position.array
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const idx = i * rows + j
            const u = basePos[idx * 3]
            const v = basePos[idx * 3 + 2]
            positions[idx * 3 + 1] =
              Math.sin(u * 0.2 * waveFreq + clock) * 1.5 +
              Math.cos(v * 0.25 * waveFreq + clock * 0.8) * 1.2
          }
        }
        particleGeo.attributes.position.needsUpdate = true

        // Lerp Camera & Turn Group
        camera.position.lerp(targetCamPos, 0.04)
        currentLookAt.lerp(targetLookAt, 0.04)
        camera.lookAt(currentLookAt)

        mainGroup.rotation.y = Math.sin(clock * 0.15) * 0.25

        renderer.render(scene, camera)
      }
      animate()

      return { setChapterView }
    })

    return {
      setChapterView: (idx) => renderers.forEach((r) => r.setChapterView(idx)),
    }
  } catch (err) {
    console.error('Thermal 3D Canvas error:', err)
    return null
  }
}

const storySteps = [...document.querySelectorAll('.story-step')]
const storyVisual = document.querySelector('.story-visual')
let figureTimer
const updateStory = (chapter) => {
  const step = storySteps.find(
    (candidate) => Number(candidate.dataset.chapter) === chapter,
  )
  if (!step) return
  if (!thermal3DInstance) thermal3DInstance = initThermal3D()
  if (thermal3DInstance) thermal3DInstance.setChapterView(chapter)
  const figure = document.querySelector('#story-number')
  const nextFigure = step.dataset.figure || ''
  const updateFigure = () => {
    figure.textContent = nextFigure
    figure.classList.remove('is-changing')
  }
  window.clearTimeout(figureTimer)
  if (figure.textContent !== nextFigure) {
    figure.classList.add('is-changing')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      updateFigure()
    else figureTimer = window.setTimeout(updateFigure, 160)
  }
  document.querySelector('#story-prefix').textContent =
    language === 'en' ? step.dataset.kickerEn : step.dataset.kickerHi
  document.querySelector('#story-unit').textContent =
    language === 'en' ? step.dataset.unitEn : step.dataset.unitHi
  document.querySelector('#story-location').textContent =
    language === 'en' ? step.dataset.locationEn : step.dataset.locationHi
  document.querySelector('#story-index').textContent =
    `${String(chapter + 1).padStart(2, '0')} — 08`
  storyVisual.dataset.theme = step.dataset.theme || 'arrival'
  storyVisual.style.setProperty('--chapter-progress', String(chapter / 7))
  storyVisual.style.setProperty('--path-offset', `${1100 - chapter * 145}px`)
  storySteps.forEach((candidate) =>
    candidate.classList.toggle('is-active', candidate === step),
  )
  document.querySelectorAll('.chapter-nav a').forEach((link, index) => {
    link.classList.toggle('active', index === chapter)
    if (index === chapter) link.setAttribute('aria-current', 'step')
    else link.removeAttribute('aria-current')
  })
}
let activeChapter = 0
const updateStoryScroll = () => {
  const story = document.querySelector('#energy-story')
  if (!story || currentView !== 'home') return
  const bounds = story.getBoundingClientRect()
  const travel = Math.max(1, bounds.height - innerHeight * 0.5)
  const progress = Math.min(
    1,
    Math.max(0, (innerHeight * 0.25 - bounds.top) / travel),
  )
  storyVisual.style.setProperty('--story-progress', String(progress))
  const readingLine = innerWidth <= 600 ? 410 : innerHeight * 0.48
  const nearest = storySteps.reduce(
    (best, step) =>
      step.getBoundingClientRect().top <= readingLine ? step : best,
    storySteps[0],
  )
  const chapter = Number(nearest.dataset.chapter)
  if (chapter !== activeChapter) {
    activeChapter = chapter
    updateStory(chapter)
  }
  const scene = Math.min(
    1,
    Math.max(
      0,
      (readingLine - nearest.getBoundingClientRect().top) /
        nearest.offsetHeight +
        0.5,
    ),
  )
  storyVisual.style.setProperty('--scene-progress', String(scene))
}
window.addEventListener('scroll', updateStoryScroll, { passive: true })

const updateSchematicScroll = () =>
  window.thermalCinematic?.update(language, currentView === 'home')
window.addEventListener('scroll', updateSchematicScroll, { passive: true })

document.querySelector('#language').addEventListener('click', () => {
  language = language === 'en' ? 'hi' : 'en'
  applyLanguage()
  route(true)
  updateStory(activeChapter)
  updateSchematicScroll()
  search()
})
document.querySelector('#open-search').addEventListener('click', () => {
  search()
  document.querySelector('#search-dialog').showModal()
  document.querySelector('#site-search').focus()
})
document
  .querySelector('#close-search')
  .addEventListener('click', () =>
    document.querySelector('#search-dialog').close(),
  )
document.querySelector('#site-search').addEventListener('input', search)
document.querySelector('#search-results').addEventListener('click', (event) => {
  if (event.target.closest('a'))
    document.querySelector('#search-dialog').close()
})
document.querySelector('#detail-view').addEventListener('click', (event) => {
  const button = event.target.closest('[data-portal]')
  if (button) renderPortal(button.dataset.portal, button.dataset.stage)
})
document.querySelector('#detail-view').addEventListener('submit', (event) => {
  if (event.target.id !== 'grievance-form') return
  event.preventDefault()
  const form = new FormData(event.target)
  const ref = `TVNL/GRV/${new Date().getFullYear()}/${String(Math.floor(1000 + Math.random() * 9000))}`
  document.querySelector('#grievance-output').innerHTML =
    `<h3>${t(pair('Grievance registered (demo)', 'शिकायत दर्ज (डेमो)'))}</h3><p>${t(pair('Reference', 'संदर्भ'))}: <strong>${ref}</strong> · ${escapeText(form.get('gsubject') || '')}</p><p>${t(pair('This demonstration does not transmit data. On the live portal this reference is used to track redressal status.', 'यह प्रदर्शन डेटा प्रेषित नहीं करता। लाइव पोर्टल पर इस संदर्भ से निवारण स्थिति देखी जाती है।'))}</p>`
  event.target.reset()
})
document.addEventListener('click', (event) => {
  const button = event.target.closest('.record-more-btn')
  if (!button) return
  const more = button.closest('.record-post')?.querySelector('.record-more')
  if (!more) return
  const open = more.classList.toggle('is-open')
  button.setAttribute('aria-expanded', open)
  button.textContent = open
    ? `${button.dataset.less} ↑`
    : `${button.dataset.more} ↓`
})
window.addEventListener('hashchange', () => route())
window.addEventListener(
  'scroll',
  () =>
    document.documentElement.style.setProperty(
      '--progress',
      String(
        scrollY /
          Math.max(1, document.documentElement.scrollHeight - innerHeight),
      ),
    ),
  { passive: true },
)
document.querySelector('#hero-photo').style.backgroundImage =
  "linear-gradient(90deg,rgba(22,28,36,.88),rgba(22,28,36,.35)),linear-gradient(0deg,rgba(22,28,36,.85),transparent 60%),url('assets/plant-sl2.jpg')"
document.querySelector('#plant-photo').src = 'assets/plant-sl1.jpg'
document.querySelector('#state-emblem').src = 'assets/jharkhand-emblem.png'
applyLanguage()
route()
updateStory(activeChapter)
updateStoryScroll()
updateSchematicScroll()
