/* Plain browser JavaScript keeps the approved static prototype file-openable. */
const pair = (en, hi) => ({ en, hi })
let language = 'en'
let currentView = 'home'
const t = (value) => value[language]
const escapeText = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ],
  )
const section = (id, en, hi, bodyEn, bodyHi, source) => ({
  id,
  title: pair(en, hi),
  body: pair(bodyEn, bodyHi),
  source,
})
const pages = {
  company: {
    title: pair('The Company', 'कंपनी'),
    intro: pair(
      'A Government of Jharkhand undertaking, committed to power generation and public service.',
      'विद्युत उत्पादन और जनसेवा के प्रति समर्पित झारखंड सरकार का उपक्रम।',
    ),
    sections: [
      section(
        'overview',
        'TVNL Overview',
        'टीवीएनएल परिचय',
        'Tenughat Vidyut Nigam Limited operates Tenughat Thermal Power Station at Lalpania in Bokaro district, Jharkhand. Its installed thermal capacity is 420 MW, comprising two 210 MW units.',
        'तेनुघाट विद्युत निगम लिमिटेड झारखंड के बोकारो जिले में ललपनिया स्थित तेनुघाट ताप विद्युत केंद्र का संचालन करता है। दो 210 मेगावाट इकाइयों के साथ इसकी स्थापित ताप विद्युत क्षमता 420 मेगावाट है।',
        'abt_us.php',
      ),
      section(
        'organisation',
        'Organizational Structure',
        'संगठनात्मक संरचना',
        'Access the published organizational charts for the corporate headquarter and TTPS plant.',
        'कॉर्पोरेट मुख्यालय और टीटीपीएस संयंत्र के प्रकाशित संगठनात्मक चार्ट देखें।',
        'pdf/tvnl_hdqrtr_orgzn_struct.pdf',
      ),
      section(
        'headquarter-chart',
        'TVNL Headquarter',
        'टीवीएनएल मुख्यालय',
        'The corporate office is located at JUPMI Building, Ranchi Smart City, Dhurwa, Ranchi. View its organization chart.',
        'कॉर्पोरेट कार्यालय जुपमी भवन, राँची स्मार्ट सिटी, धुर्वा, राँची में स्थित है। इसका संगठनात्मक चार्ट देखें।',
        'pdf/tvnl_hdqrtr_orgzn_struct.pdf',
      ),
      section(
        'plant-chart',
        'TTPS Plant',
        'टीटीपीएस संयंत्र',
        'View the published organizational structure for Tenughat Thermal Power Station.',
        'तेनुघाट ताप विद्युत केंद्र की प्रकाशित संगठनात्मक संरचना देखें।',
        'pdf/ttps_plant_orgztnstruc.pdf',
      ),
      section(
        'board',
        'Board of Directors',
        'निदेशक मंडल',
        'Shri Avinash Kumar, IAS — Chairman; Principal Secretary, Energy, Government of Jharkhand. Shri Ajoy Kumar Singh, IAS — Director; Principal Secretary, Finance, Government of Jharkhand. Sri Anil Kumar Sharma — Managing Director.',
        'श्री अविनाश कुमार, भा.प्र.से. — अध्यक्ष; प्रधान सचिव, ऊर्जा विभाग, झारखंड सरकार। श्री अजय कुमार सिंह, भा.प्र.से. — निदेशक; प्रधान सचिव, वित्त विभाग, झारखंड सरकार। श्री अनिल कुमार शर्मा — प्रबंध निदेशक।',
        'bod.php',
      ),
      section(
        'messages',
        'Messages',
        'संदेश',
        'Read the published messages from the Chairman and Managing Director.',
        'अध्यक्ष और प्रबंध निदेशक के प्रकाशित संदेश पढ़ें।',
        'm_msgs.php',
      ),
      section(
        'chairman',
        'Chairman’s Message',
        'अध्यक्ष का संदेश',
        'The Chairman’s message is available in the official company information archive.',
        'अध्यक्ष का संदेश आधिकारिक कंपनी सूचना संग्रह में उपलब्ध है।',
        'c_msgs.php',
      ),
      section(
        'managing-director',
        'Managing Director’s Message',
        'प्रबंध निदेशक का संदेश',
        'Read the message published by Managing Director Sri Anil Kumar Sharma.',
        'प्रबंध निदेशक श्री अनिल कुमार शर्मा का प्रकाशित संदेश पढ़ें।',
        'm_msgs.php',
      ),
      section(
        'strength',
        'Strength & Commitment',
        'सामर्थ्य और प्रतिबद्धता',
        'Two generating units and an established power station provide the foundation for TVNL’s contribution to Jharkhand’s energy infrastructure.',
        'दो उत्पादन इकाइयाँ और स्थापित विद्युत केंद्र झारखंड के ऊर्जा बुनियादी ढाँचे में टीवीएनएल के योगदान का आधार हैं।',
        'sc.php',
      ),
      section(
        'businesses',
        'Businesses',
        'व्यवसाय',
        'Thermal power generation is TVNL’s operating business. Planned projects include additional supercritical thermal capacity and solar photovoltaic generation.',
        'ताप विद्युत उत्पादन टीवीएनएल का परिचालन व्यवसाय है। प्रस्तावित परियोजनाओं में अतिरिक्त सुपरक्रिटिकल ताप विद्युत क्षमता और सौर फोटोवोल्टिक उत्पादन शामिल हैं।',
        'bs.php',
      ),
      section(
        'policies',
        'Policies & Guidelines',
        'नीतियाँ और दिशानिर्देश',
        'Access TVNL’s published policies and guidelines through the official information channel.',
        'आधिकारिक सूचना माध्यम से टीवीएनएल की प्रकाशित नीतियाँ और दिशानिर्देश देखें।',
        'pg.php',
      ),
      section(
        'awards',
        'Awards & Achievements',
        'पुरस्कार और उपलब्धियाँ',
        'Explore achievements published by TVNL.',
        'टीवीएनएल की प्रकाशित उपलब्धियाँ देखें।',
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
      ),
      section(
        'installed',
        'Installed Capacity',
        'स्थापित क्षमता',
        'Installed thermal capacity: 420 MW (2 × 210 MW). Planned expansion: 2 × 660 MW supercritical units, taking total thermal capacity to 1,740 MW. A separate 50 MW solar PV project is planned. Expansion figures describe planned capacity, not current generation.',
        'स्थापित ताप विद्युत क्षमता: 420 मेगावाट (2 × 210 मेगावाट)। प्रस्तावित विस्तार: 2 × 660 मेगावाट सुपरक्रिटिकल इकाइयाँ, जिससे कुल ताप विद्युत क्षमता 1,740 मेगावाट होगी। अलग से 50 मेगावाट सौर परियोजना प्रस्तावित है। विस्तार के आँकड़े प्रस्तावित क्षमता दर्शाते हैं, वर्तमान उत्पादन नहीं।',
        'icap.php',
      ),
      section(
        'performance',
        'Performance Highlights',
        'प्रदर्शन की मुख्य बातें',
        'Published historical plant load factor: 48.08% in FY2021–22 and 70.33% in FY2022–23, as recorded in the JSERC TVNL tariff order. These are historical figures. Current operational readings are not supplied by this public website.',
        'जेएसईआरसी के टीवीएनएल टैरिफ आदेश के अनुसार प्रकाशित ऐतिहासिक संयंत्र भार गुणांक: वित्त वर्ष 2021–22 में 48.08% और 2022–23 में 70.33%। ये ऐतिहासिक आँकड़े हैं। इस सार्वजनिक वेबसाइट पर वर्तमान परिचालन रीडिंग उपलब्ध नहीं हैं।',
        'https://jserc.org/pdf/tariff_order/tvnl-2026.pdf',
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
        'Search selected published procurement records by NIT number or subject. Refer to the official notice for its current status and closing date.',
        'एनआईटी संख्या या विषय से चुनिंदा प्रकाशित खरीद अभिलेख खोजें। वर्तमान स्थिति और अंतिम तिथि के लिए आधिकारिक सूचना देखें।',
        'tndr_noti.php',
      ),
      section(
        'extensions',
        'Extension Notices',
        'अवधि विस्तार सूचनाएँ',
        'Check official extension notices before responding to a procurement notice.',
        'खरीद सूचना का उत्तर देने से पहले आधिकारिक अवधि विस्तार सूचनाएँ देखें।',
        'extnoti.php',
      ),
      section(
        'news',
        'News',
        'समाचार',
        'Procurement news and related information from TVNL.',
        'टीवीएनएल की खरीद संबंधी खबरें और जानकारी।',
        'news.php',
      ),
      section(
        'corrigenda',
        'Corrigendum Notices',
        'शुद्धिपत्र सूचनाएँ',
        'Access amendments to published tenders.',
        'प्रकाशित निविदाओं के संशोधन देखें।',
        'tndr_corri.php',
      ),
      section(
        'cancellations',
        'Cancellation Notices',
        'निरस्तीकरण सूचनाएँ',
        'Access published tender cancellation notices.',
        'प्रकाशित निविदा निरस्तीकरण सूचनाएँ देखें।',
        'tndr_canc.php',
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
        'cir_off_ord.php',
      ),
      section(
        'updates',
        'Latest Updates',
        'नवीनतम जानकारी',
        'Find the updates published by TVNL through its official channel.',
        'टीवीएनएल के आधिकारिक माध्यम से प्रकाशित नवीनतम जानकारी देखें।',
        'latest_updates.php',
      ),
      section(
        'public',
        'Public Notices',
        'सार्वजनिक सूचनाएँ',
        'Access notices intended for citizens, suppliers and other stakeholders.',
        'नागरिकों, आपूर्तिकर्ताओं और अन्य हितधारकों के लिए जारी सूचनाएँ देखें।',
        'p_notice.php',
      ),
      section(
        'employment',
        'Employment Notices',
        'रोजगार सूचनाएँ',
        'View official recruitment and employment notices, including their eligibility requirements and deadlines.',
        'पात्रता आवश्यकताओं और अंतिम तिथियों सहित आधिकारिक भर्ती तथा रोजगार सूचनाएँ देखें।',
        'empNoti.php',
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
        'Use the grievance guidance published by TVNL to identify the appropriate official channel.',
        'उचित आधिकारिक माध्यम की पहचान के लिए टीवीएनएल द्वारा प्रकाशित शिकायत निवारण मार्गदर्शन देखें।',
        'grdr.php',
      ),
      section(
        'ash',
        'Ash Disposal Reports',
        'राख निस्तारण रिपोर्ट',
        'Access the published ash disposal reports for Tenughat Thermal Power Station.',
        'तेनुघाट ताप विद्युत केंद्र की प्रकाशित राख निस्तारण रिपोर्ट देखें।',
        'ash.php',
      ),
      section(
        'careers',
        'Careers at TVNL',
        'टीवीएनएल में करियर',
        'Find published employment notices and career information. Recruitment terms and dates are specified in each official notice.',
        'प्रकाशित रोजगार सूचनाएँ और करियर संबंधी जानकारी देखें। भर्ती की शर्तें और तिथियाँ प्रत्येक आधिकारिक सूचना में दी जाती हैं।',
        'empNoti.php',
      ),
      section(
        'formats',
        'Download Formats',
        'प्रपत्र डाउनलोड करें',
        'Access official downloadable formats.',
        'आधिकारिक डाउनलोड योग्य प्रपत्र देखें।',
        'dfrm.php',
      ),
      section(
        'documents',
        'Documents & Reports',
        'दस्तावेज़ और रिपोर्ट',
        'Browse TVNL’s published documents and reports. For regulatory filings and tariff orders, consult the JSERC TVNL case page.',
        'टीवीएनएल के प्रकाशित दस्तावेज़ और रिपोर्ट देखें। नियामक दाखिलों और टैरिफ आदेशों के लिए जेएसईआरसी का टीवीएनएल पृष्ठ देखें।',
        'doc_rep.php',
      ),
      section(
        'rti',
        'RTI & Public Disclosures',
        'सूचना का अधिकार और सार्वजनिक प्रकटीकरण',
        'Company information, organizational charts, published policies and reports are accessible through this site. Consult TVNL’s official documents for designated officers and RTI procedures.',
        'कंपनी की जानकारी, संगठनात्मक चार्ट, प्रकाशित नीतियाँ और रिपोर्ट इस वेबसाइट पर उपलब्ध हैं। नामित अधिकारियों और सूचना का अधिकार प्रक्रियाओं के लिए टीवीएनएल के आधिकारिक दस्तावेज़ देखें।',
        'doc_rep.php',
      ),
      section(
        'links',
        'Important Links',
        'महत्वपूर्ण लिंक',
        'Official external information channels for electricity regulation and Jharkhand public procurement.',
        'विद्युत विनियमन और झारखंड सार्वजनिक खरीद के आधिकारिक बाहरी सूचना माध्यम।',
        'implinks.php',
      ),
      section(
        'employee-section',
        'Employee Section',
        'कर्मचारी अनुभाग',
        'Access the employee information published by TVNL. The Login section also includes an employee portal demonstration.',
        'टीवीएनएल द्वारा प्रकाशित कर्मचारी जानकारी देखें। लॉगिन अनुभाग में कर्मचारी पोर्टल का प्रदर्शन भी उपलब्ध है।',
        'esec.php',
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
    nit: '02/Solar/EPC/TVNL/RAN/2025-26',
    category: 'solar',
    title: pair(
      '50 MW solar photovoltaic project — EPC',
      '50 मेगावाट सौर फोटोवोल्टिक परियोजना — ईपीसी',
    ),
  },
  {
    nit: '40/Coal Block/W/TVNL/RAN/2025-26',
    category: 'coal',
    title: pair(
      'Rajbar coal block railway siding consultancy',
      'राजबार कोयला खंड रेलवे साइडिंग परामर्श',
    ),
  },
  {
    nit: '22/IT/W/TVNL/RAN/2024-25',
    category: 'it',
    title: pair('Sybase / SAP SRM upgrade', 'साइबेस / एसएपी एसआरएम उन्नयन'),
  },
  {
    nit: '32/IT/W/TVNL/RAN/2025-26',
    category: 'it',
    title: pair('IT equipment annual maintenance', 'आईटी उपकरण वार्षिक रखरखाव'),
  },
]
const sourceLink = (path) =>
  path.startsWith('https://') ? path : `https://tvnl.in/${path}`
const officialLink = (path) =>
  `<a class="text-link" href="${sourceLink(path)}" target="_blank" rel="noopener noreferrer">${t(pair('View official record ↗', 'आधिकारिक अभिलेख देखें ↗'))}</a>`
const tenderMarkup = () =>
  `<div class="filterbar"><input id="tender-search" type="search" aria-label="${t(pair('Search NIT or subject', 'एनआईटी या विषय खोजें'))}" placeholder="${t(pair('Search NIT number or subject…', 'एनआईटी संख्या या विषय खोजें…'))}"><select id="tender-category" aria-label="${t(pair('Tender category', 'निविदा श्रेणी'))}"><option value="all">${t(pair('All categories', 'सभी श्रेणियाँ'))}</option><option value="solar">${t(pair('Solar', 'सौर'))}</option><option value="coal">${t(pair('Coal block', 'कोयला खंड'))}</option><option value="it">${t(pair('IT', 'सूचना प्रौद्योगिकी'))}</option></select></div><div id="tender-results" aria-live="polite"></div>`
const renderTenders = () => {
  const query = document
    .querySelector('#tender-search')
    .value.toLowerCase()
    .trim()
  const category = document.querySelector('#tender-category').value
  const matches = tenders.filter(
    (record) =>
      (category === 'all' || record.category === category) &&
      `${record.nit} ${record.title.en} ${record.title.hi}`
        .toLowerCase()
        .includes(query),
  )
  document.querySelector('#tender-results').innerHTML = matches.length
    ? matches
        .map(
          (record) =>
            `<a class="document-row" href="https://tvnl.in/tndr_noti.php" target="_blank" rel="noopener noreferrer"><div><strong>${t(record.title)}</strong><small>NIT ${record.nit}</small><small>${t(pair('Published record · Check official notice for current dates and status', 'प्रकाशित अभिलेख · वर्तमान तिथियों और स्थिति के लिए आधिकारिक सूचना देखें'))}</small></div><span>↗</span></a>`,
        )
        .join('')
    : `<p class="empty">${t(pair('No matching records. Try another NIT number or category.', 'कोई मेल खाता अभिलेख नहीं मिला। दूसरी एनआईटी संख्या या श्रेणी आज़माएँ।'))}</p>`
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
const renderDetail = (key) => {
  const page = pages[key]
  document.querySelector('#detail-view').innerHTML =
    `<div class="view-banner"><div class="eyebrow">TVNL / ${escapeText(t(page.title))}</div><h1>${t(page.title)}</h1><p>${t(page.intro)}</p></div><nav class="subnav" aria-label="${t(pair('Section navigation', 'अनुभाग नेविगेशन'))}">${page.sections.map((item) => `<a href="#${key}/${item.id}">${t(item.title)}</a>`).join('')}</nav><div class="content-sections">${page.sections.map((item) => `<section class="content-block" id="${item.id}"><h2>${t(item.title)}</h2><p>${t(item.body)}</p>${key === 'login' ? portalMarkup(item.id) : ''}${item.id === 'tender-notices' ? tenderMarkup() : ''}${item.id === 'gallery' ? `<div class="updates"><img src="https://tvnl.in/img/sl1.jpg" alt="${t(pair('Tenughat Thermal Power Station buildings', 'तेनुघाट ताप विद्युत केंद्र के भवन'))}" loading="lazy"><img src="https://tvnl.in/img/sl2.jpg" alt="${t(pair('Tenughat power station switchyard', 'तेनुघाट विद्युत केंद्र स्विचयार्ड'))}" loading="lazy"></div>` : ''}${item.source ? officialLink(item.source) : ''}${item.id === 'links' ? `<div class="document-row"><a href="https://jserc.org/tvnl.aspx" target="_blank" rel="noopener noreferrer">${t(pair('JSERC — TVNL filings ↗', 'जेएसईआरसी — टीवीएनएल दाखिले ↗'))}</a><a href="https://jharkhandtenders.gov.in" target="_blank" rel="noopener noreferrer">${t(pair('Jharkhand eProcurement ↗', 'झारखंड ई-प्रोक्योरमेंट ↗'))}</a></div>` : ''}</section>`).join('')}</div>`
  if (key === 'tenders') {
    renderTenders()
    document
      .querySelector('#tender-search')
      .addEventListener('input', renderTenders)
    document
      .querySelector('#tender-category')
      .addEventListener('change', renderTenders)
  }
}
const applyLanguage = () => {
  document.documentElement.lang = language
  document.querySelectorAll('[data-en][data-hi]').forEach((element) => {
    element.textContent = element.dataset[language]
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
    pair(
      'Try “tender”, “ash” or “contact”',
      '“निविदा”, “राख” या “संपर्क” खोजें',
    ),
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
      if (element) element.scrollIntoView({ behavior: 'instant' })
      else if (changed || !anchor)
        window.scrollTo({ top: 0, behavior: 'instant' })
    })
}
const search = () => {
  const query = document
    .querySelector('#site-search')
    .value.trim()
    .toLowerCase()
  const records = Object.entries(pages)
    .flatMap(([key, page]) =>
      page.sections.map((item) => ({ key, page, item })),
    )
    .filter(({ item }) =>
      `${item.title.en} ${item.title.hi} ${item.body.en} ${item.body.hi}`
        .toLowerCase()
        .includes(query),
    )
  document.querySelector('#search-results').innerHTML = records.length
    ? records
        .slice(0, 15)
        .map(
          ({ key, page, item }) =>
            `<a href="#${key}/${item.id}">${t(item.title)}<small>${t(page.title)}</small></a>`,
        )
        .join('')
    : `<p class="empty">${t(pair('No results found. Try another search.', 'कोई परिणाम नहीं मिला। अन्य शब्द से खोजें।'))}</p>`
}
const updateStory = (chapter) => {
  const figures = ['420', '1,740', '50']
  const labels = [
    pair('MW · INSTALLED CAPACITY', 'मेगावाट · स्थापित क्षमता'),
    pair(
      'MW · PLANNED TOTAL THERMAL CAPACITY',
      'मेगावाट · प्रस्तावित कुल ताप क्षमता',
    ),
    pair('MW · PLANNED SOLAR PROJECT', 'मेगावाट · प्रस्तावित सौर परियोजना'),
  ]
  document.querySelector('#story-number').textContent = figures[chapter]
  document.querySelector('#story-unit').textContent = t(labels[chapter])
  document.querySelector('#story-index').textContent = `0${chapter + 1} — 03`
  document
    .querySelectorAll('.chapter-nav a')
    .forEach((link, index) =>
      link.classList.toggle('active', index === chapter),
    )
}
let activeChapter = 0
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeChapter = Number(entry.target.dataset.chapter)
        updateStory(activeChapter)
      }
    })
  },
  { rootMargin: '-25% 0px -30% 0px', threshold: 0 },
)
document
  .querySelectorAll('.story-step')
  .forEach((element) => observer.observe(element))
document.querySelector('#language').addEventListener('click', () => {
  language = language === 'en' ? 'hi' : 'en'
  applyLanguage()
  route(true)
  updateStory(activeChapter)
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
  "linear-gradient(90deg,rgba(9,36,31,.85),rgba(9,36,31,.15)),linear-gradient(0deg,rgba(9,36,31,.8),transparent 65%),url('https://tvnl.in/img/sl2.jpg')"
document.querySelector('#plant-photo').src = 'https://tvnl.in/img/sl1.jpg'
document.querySelector('#state-emblem').src =
  'https://www.jharkhand.gov.in/images/jhlogo55.PNG'
applyLanguage()
route()
