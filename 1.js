function processAwvsVulnName(name) {
    console.log(name);
    const regexGroup = [
      { reg: /^*Cross site scripting*$/i, val: 'xss' },
      { reg: /^*Cross site Request Forgery*$/i, val: 'csrf' },
      { reg: /^*SQL Injection*,*SQL Injection*$/i, val: 'sqli' },
      { reg: /^File Inclusion*$/i, val: 'file_inclusion' },
      { reg: /^*Code Injection*$/i, val: 'cdde_injection' },
      { reg: /^Code execution$/i, val: 'cmd_execution' },
      { reg: /^*URL redirection*$/i, val: 'redirection' },
      { reg: /^*leak*$/i, val: 'info_leak' },
      { reg: /^*Weak password*$/i, val: 'weakpass' },
    ];

    for (const item of regexGroup) {
      if (item.reg.test(name)) {
        return item.val;
      }
    }
    return name;
  }

  const reg = /Cross site scripting|Remote Code Injection/i
  //const reg = new RegExp('Cross site scripting', 'i')
  console.log(reg.test('qwdC Remote Code injection wd'))
