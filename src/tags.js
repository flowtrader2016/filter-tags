const tagsArray = [
  {
    id: 4436,
    label: "security",
    article_tags_aggregate: { aggregate: { count: 52 } },
  },
  {
    id: 4506,
    label: "cloud",
    article_tags_aggregate: { aggregate: { count: 17 } },
  },
  {
    id: 4441,
    label: "amazon-web-services",
    article_tags_aggregate: { aggregate: { count: 14 } },
  },
  {
    id: 4465,
    label: "java",
    article_tags_aggregate: { aggregate: { count: 12 } },
  },
  {
    id: 4468,
    label: "python",
    article_tags_aggregate: { aggregate: { count: 9 } },
  },
  {
    id: 4504,
    label: "linux",
    article_tags_aggregate: { aggregate: { count: 7 } },
  },
  {
    id: 4447,
    label: "go",
    article_tags_aggregate: { aggregate: { count: 6 } },
  },
  {
    id: 4442,
    label: "javascript",
    article_tags_aggregate: { aggregate: { count: 6 } },
  },
  {
    id: 4630,
    label: "sysadmin",
    article_tags_aggregate: { aggregate: { count: 6 } },
  },
  {
    id: 4567,
    label: "testing",
    article_tags_aggregate: { aggregate: { count: 6 } },
  },
  {
    id: 4534,
    label: "design",
    article_tags_aggregate: { aggregate: { count: 5 } },
  },
  {
    id: 4443,
    label: "kubernetes",
    article_tags_aggregate: { aggregate: { count: 5 } },
  },
  {
    id: 4488,
    label: "web-services",
    article_tags_aggregate: { aggregate: { count: 5 } },
  },
  {
    id: 4516,
    label: "azure",
    article_tags_aggregate: { aggregate: { count: 4 } },
  },
  {
    id: 4473,
    label: "penetration-testing",
    article_tags_aggregate: { aggregate: { count: 4 } },
  },
  {
    id: 4462,
    label: "php",
    article_tags_aggregate: { aggregate: { count: 4 } },
  },
  {
    id: 4724,
    label: "android",
    article_tags_aggregate: { aggregate: { count: 3 } },
  },
  {
    id: 4466,
    label: "c++",
    article_tags_aggregate: { aggregate: { count: 3 } },
  },
  {
    id: 4499,
    label: "cisco",
    article_tags_aggregate: { aggregate: { count: 3 } },
  },
  {
    id: 4483,
    label: "cryptography",
    article_tags_aggregate: { aggregate: { count: 3 } },
  },
  {
    id: 4623,
    label: "agile",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4715,
    label: "apache-spark",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4541,
    label: "automation",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4474,
    label: "docker",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4546,
    label: "infrastructure",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4606,
    label: "juniper",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4692,
    label: "kotlin",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4656,
    label: "network-security",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4756,
    label: "reactjs",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4622,
    label: "saas",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4644,
    label: "scala",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4551,
    label: "splunk",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4595,
    label: "spring",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4689,
    label: "sql",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4503,
    label: "windows",
    article_tags_aggregate: { aggregate: { count: 2 } },
  },
  {
    id: 4681,
    label: "active-directory",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4505,
    label: "amazon-ec2",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4498,
    label: "antimalware",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4449,
    label: "authentication",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4450,
    label: "authorization",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4703,
    label: "automated-tests",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4718,
    label: "bigdata",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4585,
    label: "boot",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  { id: 4746, label: "c", article_tags_aggregate: { aggregate: { count: 1 } } },
  {
    id: 4750,
    label: "c#",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4632,
    label: "cloud-security",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4634,
    label: "computer-forensics",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4731,
    label: "concurrency",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4655,
    label: "data-security",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4698,
    label: "devops",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4467,
    label: "distributed-system",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4684,
    label: "dns",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4530,
    label: "elasticsearch",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4583,
    label: "embedded-linux",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4665,
    label: "esxi",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4672,
    label: "firewall",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4729,
    label: "hadoop",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4673,
    label: "ids",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4758,
    label: "ios",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4603,
    label: "lan",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4747,
    label: "linux-kernel",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4757,
    label: "mobile",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4931,
    label: "mysql",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4708,
    label: "networking",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4752,
    label: "networkx",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4509,
    label: "node.js",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4759,
    label: "objective-c",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4682,
    label: "openldap",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4742,
    label: "paas",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4497,
    label: "project-management",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4604,
    label: "routing",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4446,
    label: "ruby-on-rails",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4709,
    label: "scripting",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4712,
    label: "sdlc",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4701,
    label: "selenium",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 5294,
    label: "sentinel",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4717,
    label: "spring-boot",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4748,
    label: "swift",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4615,
    label: "symfony2",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4683,
    label: "tcp-ip",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4458,
    label: "terraform",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4485,
    label: "threat-model",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4685,
    label: "tls1.2",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4582,
    label: "uefi",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4579,
    label: "user-experience",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4484,
    label: "veracode",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4664,
    label: "virtual-machine",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4662,
    label: "vmware",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4674,
    label: "waf",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4523,
    label: "web-applications",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4602,
    label: "wlan",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
  {
    id: 4657,
    label: "xss",
    article_tags_aggregate: { aggregate: { count: 1 } },
  },
];

export default tagsArray;
