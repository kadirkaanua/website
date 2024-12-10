// devopsSkills array'ini güncelleyelim:
const devopsSkills = [
    { category: 'Cloud & Infrastructure', skills: [
      { name: 'AWS', level: '85%' },
      { name: 'KVM/QEMU', level: '90%' },
      { name: 'Kubernetes', level: '85%' },
      { name: 'Docker', level: '90%' }
    ]},
    { category: 'IaC & Automation', skills: [
      { name: 'Terraform', level: '90%' },
      { name: 'Ansible', level: '90%' },
      { name: 'Bash Script', level: '85%' },
      { name: 'Python', level: '80%' }
    ]},
    { category: 'CI/CD & Version Control', skills: [
      { name: 'Jenkins', level: '85%' },
      { name: 'Bitbucket', level: '90%' },
      { name: 'Git', level: '90%' }
    ]},
    { category: 'Monitoring & Database', skills: [
      { name: 'Zabbix', level: '85%' },
      { name: 'Oracle', level: '80%' },
      { name: 'PostgreSQL', level: '85%' },
      { name: 'AppDynamics', level: '80%' }
    ]}
  ];

// experiences array'ini güncelleyelim:
const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Vitelco (Vodafone)',
      period: '2024 - Present',
      responsibilities: [
        'Bitbucket ve Ansible ile çoklu sunucular üzerinde otomasyon kurulumu',
        'Python Flask ile Oracle database sorgularını dashboard haline getirme',
        'Crontab ve Bash scriptler ile otomatik mail alarmları oluşturma',
        'AppDynamics update ve Kafka konfigürasyonu'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Creentech Teknoloji Danışmanlık',
      period: '2023 - 2024',
      responsibilities: [
        'Zabbix ve Grafana ile sunucu izleme projelerinin yönetimi',
        'Terraform ve Ansible ile Nutanix üzerinde Kubernetes cluster kurulumu',
        'Elasticsearch ve Kibana yapılandırması',
        'Docker-compose ile MinIO kurulumu ve yönetimi'
      ]
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'Veriyol A.Ş.',
      period: '2021 - 2023',
      responsibilities: [
        'KVM/QEMU teknolojileri ile sanal makineler oluşturma',
        'AWS ve Kubernetes servislerinde sistem yönetimi',
        'Terraform ve Ansible ile altyapı yönetimi',
        'Blockchain teknolojileri entegrasyonu'
      ]
    }
  ];

// Hakkımda kısmını güncelleyelim:
<p className="text-gray-600 leading-relaxed">
  Yaklaşık 4 yıldır, Mühendislik eğitimi ve teknolojik ilgilerim doğrultusunda, ilerleyen teknolojiler ve sürekli olarak gelişen DevOps kültüründe, sürekli olarak öğrenmeyi ve gelişmeyi hedefleyen birisi olarak çalışmaktayım. Cloud platformları, konteynerizasyon, CI/CD ve IaC gibi modern DevOps pratiklerinde deneyim sahibiyim. Özellikle Kubernetes, Docker, AWS, Terraform ve Ansible konularında uzmanlık geliştirdim.
</p>

// İletişim bilgilerini güncelleyelim:
<a href="mailto:kadir.kaan711@gmail.com" className="text-gray-600 hover:text-blue-600">
  <Mail size={24} />
</a>
