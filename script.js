// =====================================================================
// TEMPLATE CONFIGURATION
// =====================================================================

const TEMPLATE_STYLES = {
  modern: {
    name: 'Modern', category: 'professional',
    accent: '#1a56db', accentPale: '#eff6ff', headerColor: '#0f1f3d',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#1a56db', skillBg: '#eff6ff', skillColor: '#1a56db',
    aiInstruction: 'Use clean modern formatting with blue accents, clear section dividers, and strong action verbs. Focus on metrics and achievements.',
    emoji: '✦', tagline: 'Clean & Professional'
  },
  corporate: {
    name: 'Corporate', category: 'professional',
    accent: '#111827', accentPale: '#f3f4f6', headerColor: '#111827',
    fontDisplay: 'DM Sans', fontBody: 'DM Sans',
    sectionTitleColor: '#111827', skillBg: '#f3f4f6', skillColor: '#374151',
    aiInstruction: 'Use formal corporate language. Dark gray/black theme. Structured layout with formal alignment. Emphasize leadership, revenue impact, and strategic contributions.',
    emoji: '🏢', tagline: 'Formal & Authoritative'
  },
  creative: {
    name: 'Creative', category: 'creative',
    accent: '#7c3aed', accentPale: '#f5f3ff', headerColor: '#4c1d95',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#7c3aed', skillBg: '#f5f3ff', skillColor: '#6d28d9',
    aiInstruction: 'Use bold, expressive language. Highlight creative achievements, portfolio-worthy projects, and unique skills. Show personality while remaining professional.',
    emoji: '🎨', tagline: 'Bold & Expressive'
  },
  'ats-clean': {
    name: 'ATS Clean', category: 'minimal',
    accent: '#000000', accentPale: '#f9fafb', headerColor: '#000000',
    fontDisplay: 'DM Sans', fontBody: 'DM Sans',
    sectionTitleColor: '#000000', skillBg: 'transparent', skillColor: '#333333',
    aiInstruction: 'Use pure ATS-friendly formatting: no graphics, simple single-column layout. Plain text bullet points. Maximize keyword density for the target role. Every word must count.',
    emoji: '📋', tagline: 'Maximum ATS Score'
  },
  executive: {
    name: 'Executive', category: 'professional',
    accent: '#0f1f3d', accentPale: '#dbeafe', headerColor: '#ffffff',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#0f1f3d', skillBg: '#0f1f3d', skillColor: '#93c5fd',
    aiInstruction: 'Use C-suite executive language. Dark navy header. Emphasize P&L responsibility, board-level decisions, organizational leadership, and strategic vision. Use numbers and scale.',
    emoji: '👔', tagline: 'C-Suite Caliber'
  },
  'two-column': {
    name: 'Two Column', category: 'professional',
    accent: '#1a56db', accentPale: '#eff6ff', headerColor: '#0f1f3d',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#1a56db', skillBg: '#eff6ff', skillColor: '#1a56db',
    aiInstruction: 'Use two-column friendly layout. Skills and contact on left sidebar, experience and projects on right main column. Concise bullet points that fit well in narrow columns.',
    emoji: '⊞', tagline: 'Space-Efficient'
  },
  fresher: {
    name: 'Fresher', category: 'minimal',
    accent: '#10b981', accentPale: '#ecfdf5', headerColor: '#065f46',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#065f46', skillBg: '#ecfdf5', skillColor: '#065f46',
    aiInstruction: 'Optimized for fresh graduates and entry-level candidates. Emphasize education, projects, internships, and potential. Use enthusiastic but professional language. Highlight learning ability.',
    emoji: '🌱', tagline: 'Perfect for Freshers'
  },
  tech: {
    name: 'Tech', category: 'tech',
    accent: '#00ff88', accentPale: 'rgba(0,255,136,0.08)', headerColor: '#00ff88',
    fontDisplay: 'IBM Plex Mono', fontBody: 'IBM Plex Mono',
    sectionTitleColor: '#00ff88', skillBg: 'rgba(0,255,136,0.08)', skillColor: '#00ff88',
    aiInstruction: 'Use technical, developer-focused language. Dark theme aesthetic. Emphasize GitHub contributions, tech stack depth, system design, performance optimizations, and engineering metrics.',
    emoji: '</>', tagline: 'Built for Developers'
  },
  elegant: {
    name: 'Elegant', category: 'creative',
    accent: '#b45309', accentPale: '#fef3c7', headerColor: '#1c1917',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#b45309', skillBg: '#fef3c7', skillColor: '#92400e',
    aiInstruction: 'Use refined, sophisticated language. Gold/amber accents. Centered header. Perfect for lawyers, consultants, academics, and luxury industry professionals. Emphasize prestige and expertise.',
    emoji: '◈', tagline: 'Refined & Sophisticated'
  },
  compact: {
    name: 'Compact', category: 'minimal',
    accent: '#0f172a', accentPale: '#f1f5f9', headerColor: '#0f172a',
    fontDisplay: 'DM Sans', fontBody: 'DM Sans',
    sectionTitleColor: '#0f172a', skillBg: '#f1f5f9', skillColor: '#334155',
    aiInstruction: 'Use compact, dense formatting. Shorter sentences, tighter bullet points. Ideal for fitting maximum information on one page. Prioritize the most impactful achievements only.',
    emoji: '▣', tagline: 'One Page Guaranteed'
  },
  professional: {
    name: 'Professional', category: 'professional',
    accent: '#1e3a5f', accentPale: '#dbeafe', headerColor: '#ffffff',
    fontDisplay: 'Fraunces', fontBody: 'DM Sans',
    sectionTitleColor: '#1e3a5f', skillBg: '#dbeafe', skillColor: '#1e3a5f',
    aiInstruction: 'Use polished professional language with a blue gradient header. Balance technical skills with soft skills. Suitable for mid-senior roles. Emphasize collaboration, impact, and growth.',
    emoji: '◉', tagline: 'Balanced & Polished'
  },
  minimal: {
    name: 'Minimal', category: 'minimal',
    accent: '#334155', accentPale: '#f8fafc', headerColor: '#0f172a',
    fontDisplay: 'DM Sans', fontBody: 'DM Sans',
    sectionTitleColor: '#334155', skillBg: '#f8fafc', skillColor: '#334155',
    aiInstruction: 'Use ultra-minimal, clean language. White space is key. Short sharp bullet points. No fluff. Let achievements speak for themselves. Perfect for design-conscious professionals.',
    emoji: '○', tagline: 'Less is More'
  }
};

// =====================================================================
// GLOBAL STATE
// =====================================================================

let selectedTemplate = 'modern';
let expCount = 0;
let projCount = 0;

// Voice mode state
let recognition    = null;
let isRecording    = false;
let fullTranscript = '';
let parsedVoiceData = null;

// =====================================================================
// PAGE NAVIGATION
// =====================================================================

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);

  if (pageId === 'voice-page') {
    initVoiceStars();
  } else {
    if (isRecording) {
      isRecording = false;
      if (recognition) { recognition.stop(); recognition = null; }
      updateMicUI(false);
    }
  }
}

// =====================================================================
// TEMPLATE SELECTION SYSTEM
// =====================================================================

function buildTemplatePreviews() {
  const grid = document.getElementById('templateGrid');
  grid.innerHTML = '';

  Object.entries(TEMPLATE_STYLES).forEach(([key, tpl]) => {
    const card = document.createElement('div');
    card.className = 'tpl-card' + (key === selectedTemplate ? ' selected' : '');
    card.dataset.template = key;
    card.dataset.category  = tpl.category;

    card.innerHTML = `
      <div class="tpl-card-badge">${key === selectedTemplate ? '✓ Selected' : 'Use This'}</div>
      <div class="tpl-preview">
        <div class="tpl-preview-inner" id="preview-${key}">
          ${buildMiniResume(key, tpl)}
        </div>
      </div>
      <div class="tpl-card-footer">
        <div>
          <div class="tpl-card-name">${tpl.emoji} ${tpl.name}</div>
          <div class="tpl-card-category">${tpl.tagline}</div>
        </div>
        <button class="tpl-use-btn" onclick="selectTemplate('${key}', event)">
          ${key === selectedTemplate ? '✓ Selected' : 'Use This'}
        </button>
      </div>
    `;
    card.addEventListener('click', () => selectTemplate(key));
    grid.appendChild(card);
  });
}

function buildMiniResume(key, tpl) {
  const isExec     = key === 'executive' || key === 'professional';
  const isDark     = key === 'tech';
  const bg         = isDark ? '#0f172a' : '#ffffff';
  const bodyColor  = isDark ? '#94a3b8' : '#64748b';
  const titleColor = isDark ? '#e2e8f0' : '#0f172a';
  const lineColor  = isDark ? '#1e293b' : '#e2e8f0';
  const headerBg   = isExec ? tpl.accent : (isDark ? '#0f172a' : 'transparent');
  const nameFontFamily = ['DM Sans', 'IBM Plex Mono'].includes(tpl.fontDisplay)
    ? `'DM Sans',sans-serif`
    : `'Fraunces',serif`;
  const nameColor = isExec ? '#fff' : tpl.headerColor;
  const roleColor = isExec ? 'rgba(255,255,255,0.7)' : tpl.accent;
  const contactColor = isExec ? 'rgba(255,255,255,0.6)' : (isDark ? '#475569' : bodyColor);

  const headerPad    = isExec ? '20px 32px 20px' : (isDark ? '20px 32px 12px' : '0 0 14px 0');
  const headerMargin = (isExec || isDark) ? '-32px -32px 20px' : '0';
  const headerBorder = (!isExec && !isDark) ? `3px solid ${tpl.accent}` : 'none';

  const skillRadius = (key === 'fresher' || key === 'creative') ? '100px' : '4px';
  const skills = ['React', 'Node.js', 'Python', 'SQL', 'Agile'];

  return `
    <div style="background:${bg}; padding:32px; min-height:560px; font-family:'DM Sans',sans-serif;">
      <div style="background:${headerBg}; padding:${headerPad}; margin:${headerMargin}; border-bottom:${headerBorder};">
        <div style="font-family:${nameFontFamily}; font-size:22px; font-weight:900; color:${nameColor}; letter-spacing:-0.5px; margin-bottom:4px;">Alex Johnson</div>
        <div style="font-size:12px; font-weight:600; color:${roleColor}; margin-bottom:8px;">Senior Product Manager</div>
        <div style="font-size:10px; color:${contactColor};">alex@email.com &nbsp;·&nbsp; +91 98765 43210 &nbsp;·&nbsp; Bangalore</div>
      </div>
      <div style="margin-bottom:14px;">
        <div style="font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:2px; color:${tpl.sectionTitleColor}; border-bottom:1px solid ${isDark ? '#1e293b' : tpl.accentPale}; padding-bottom:5px; margin-bottom:8px;">Professional Summary</div>
        <div style="background:${lineColor}; height:6px; border-radius:3px; margin-bottom:5px;"></div>
        <div style="background:${lineColor}; height:6px; width:80%; border-radius:3px; margin-bottom:5px;"></div>
        <div style="background:${lineColor}; height:6px; width:65%; border-radius:3px;"></div>
      </div>
      <div style="margin-bottom:14px;">
        <div style="font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:2px; color:${tpl.sectionTitleColor}; border-bottom:1px solid ${isDark ? '#1e293b' : tpl.accentPale}; padding-bottom:5px; margin-bottom:8px;">Core Skills</div>
        <div style="display:flex; flex-wrap:wrap; gap:5px;">
          ${skills.map(s => `<span style="background:${tpl.skillBg}; color:${tpl.skillColor}; border:1px solid ${isDark ? 'rgba(0,255,136,0.3)' : tpl.accentPale}; padding:2px 8px; border-radius:${skillRadius}; font-size:9px;">${s}</span>`).join('')}
        </div>
      </div>
      <div style="margin-bottom:14px;">
        <div style="font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:2px; color:${tpl.sectionTitleColor}; border-bottom:1px solid ${isDark ? '#1e293b' : tpl.accentPale}; padding-bottom:5px; margin-bottom:8px;">Work Experience</div>
        <div style="font-size:11px; font-weight:700; color:${isDark ? '#e2e8f0' : titleColor}; margin-bottom:2px;">Product Lead</div>
        <div style="font-size:10px; font-weight:600; color:${tpl.accent}; margin-bottom:6px;">Google · 2021–2024</div>
        <div style="background:${lineColor}; height:5px; border-radius:3px; margin-bottom:4px;"></div>
        <div style="background:${lineColor}; height:5px; width:85%; border-radius:3px; margin-bottom:4px;"></div>
        <div style="background:${lineColor}; height:5px; width:70%; border-radius:3px;"></div>
      </div>
      <div>
        <div style="font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:2px; color:${tpl.sectionTitleColor}; border-bottom:1px solid ${isDark ? '#1e293b' : tpl.accentPale}; padding-bottom:5px; margin-bottom:8px;">Education</div>
        <div style="font-size:11px; font-weight:700; color:${isDark ? '#e2e8f0' : titleColor}; margin-bottom:2px;">B.Tech Computer Science</div>
        <div style="font-size:10px; color:${bodyColor};">IIT Bombay · 2021 · 8.9 CGPA</div>
      </div>
    </div>
  `;
}

function selectTemplate(key, event) {
  if (event) event.stopPropagation();
  selectedTemplate = key;

  document.querySelectorAll('.tpl-card').forEach(card => {
    const isSelected = card.dataset.template === key;
    card.classList.toggle('selected', isSelected);
    const badge = card.querySelector('.tpl-card-badge');
    const btn   = card.querySelector('.tpl-use-btn');
    if (badge) badge.textContent = isSelected ? '✓ Selected' : 'Use This';
    if (btn)   btn.textContent   = isSelected ? '✓ Selected' : 'Use This';
  });

  const tpl             = TEMPLATE_STYLES[key];
  const proceedInfo     = document.getElementById('proceedInfo');
  const selectedName    = document.getElementById('selectedTemplateName');
  const proceedHint     = document.getElementById('proceedHint');
  const proceedBtn      = document.getElementById('proceedBtn');

  proceedInfo.classList.remove('hidden');
  selectedName.textContent = `✓ ${tpl.name} template selected`;
  proceedHint.textContent  = 'Ready! Click below to fill in your details.';
  proceedBtn.disabled      = false;

  setTimeout(() => proceedBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
}

function filterTemplates(category, btn) {
  document.querySelectorAll('.tpl-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tpl-card').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
  });
}

function proceedToForm() {
  const tpl   = TEMPLATE_STYLES[selectedTemplate];
  const badge = document.getElementById('formTemplateBadge');
  badge.innerHTML = `
    <span class="selected-tpl-chip"
      style="background:${tpl.accentPale}; border:1px solid ${tpl.accent}30; color:${tpl.accent};"
      onclick="showPage('template-page')">
      ${tpl.emoji} ${tpl.name} Template &nbsp;·&nbsp;
      <span style="opacity:0.7; font-weight:500;">Change</span>
    </span>`;
  showPage('form-page');
}

// =====================================================================
// DYNAMIC FORM ITEMS
// =====================================================================

function addExperience(role = '', company = '', desc = '') {
  expCount++;
  const id        = expCount;
  const container = document.getElementById('expContainer');
  const div       = document.createElement('div');
  div.className   = 'exp-item';
  div.id          = `exp-${id}`;
  div.innerHTML   = `
    <button type="button" class="remove-btn" onclick="removeItem('exp-${id}')" title="Remove">✕</button>
    <div class="form-row">
      <div class="field">
        <label>Job Title / Role</label>
        <input type="text" placeholder="e.g. Frontend Developer" value="${role}" class="exp-role" />
      </div>
      <div class="field">
        <label>Company Name</label>
        <input type="text" placeholder="e.g. Tata Consultancy Services" value="${company}" class="exp-company" />
      </div>
    </div>
    <div class="field">
      <label>Description</label>
      <textarea class="exp-desc" placeholder="What did you do? e.g. Built a React dashboard that reduced report generation time by 60%. Mentored 3 junior developers...">${desc}</textarea>
      <span class="hint">Describe achievements, responsibilities, and impact. AI will enhance this.</span>
    </div>
  `;
  container.appendChild(div);
  updateProgress();
}

function addProject(name = '', desc = '') {
  projCount++;
  const id        = projCount;
  const container = document.getElementById('projContainer');
  const div       = document.createElement('div');
  div.className   = 'proj-item';
  div.id          = `proj-${id}`;
  div.innerHTML   = `
    <button type="button" class="remove-btn" onclick="removeItem('proj-${id}')" title="Remove">✕</button>
    <div class="field">
      <label>Project Name</label>
      <input type="text" placeholder="e.g. E-Commerce Platform, AI Chatbot" value="${name}" class="proj-name" />
    </div>
    <div class="field">
      <label>Description</label>
      <textarea class="proj-desc" placeholder="What did you build? Technologies used? Impact?">${desc}</textarea>
      <span class="hint">Mention tech stack, purpose, and outcome. AI will polish this.</span>
    </div>
  `;
  container.appendChild(div);
  updateProgress();
}

function removeItem(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(-8px)';
    el.style.transition = 'all 0.2s';
    setTimeout(() => el.remove(), 200);
  }
}

// =====================================================================
// PROGRESS BAR
// =====================================================================

function updateProgress() {
  const fields = ['fullName', 'email', 'phone', 'jobRole', 'skills'];
  let filled   = 0;
  fields.forEach(f => { if (document.getElementById(f)?.value.trim()) filled++; });
  const pct = Math.min(100, Math.round((filled / fields.length) * 100));
  document.getElementById('progressFill').style.width = pct + '%';
}

// =====================================================================
// FORM VALIDATION
// =====================================================================

function validateForm() {
  let valid = true;
  const required = [
    { id: 'fullName', label: 'field-fullName' },
    { id: 'email',    label: 'field-email'    },
    { id: 'phone',    label: 'field-phone'    },
    { id: 'jobRole',  label: 'field-jobRole'  },
    { id: 'skills',   label: 'field-skills'   },
  ];

  required.forEach(({ id, label }) => {
    const el      = document.getElementById(id);
    const fieldEl = document.getElementById(label);
    if (!el.value.trim()) {
      fieldEl.classList.add('has-error');
      valid = false;
    } else {
      fieldEl.classList.remove('has-error');
    }
  });

  const email = document.getElementById('email').value;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('field-email').classList.add('has-error');
    valid = false;
  }

  if (!valid) {
    document.querySelector('.form-card .has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return valid;
}

// =====================================================================
// COLLECT FORM DATA
// =====================================================================

function collectFormData() {
  const experiences = [];
  document.querySelectorAll('.exp-item').forEach(item => {
    const role    = item.querySelector('.exp-role')?.value.trim();
    const company = item.querySelector('.exp-company')?.value.trim();
    const desc    = item.querySelector('.exp-desc')?.value.trim();
    if (role || company || desc) experiences.push({ role, company, desc });
  });

  const projects = [];
  document.querySelectorAll('.proj-item').forEach(item => {
    const name = item.querySelector('.proj-name')?.value.trim();
    const desc = item.querySelector('.proj-desc')?.value.trim();
    if (name || desc) projects.push({ name, desc });
  });

  return {
    fullName:       document.getElementById('fullName').value.trim(),
    email:          document.getElementById('email').value.trim(),
    phone:          document.getElementById('phone').value.trim(),
    location:       document.getElementById('location').value.trim(),
    jobRole:        document.getElementById('jobRole').value.trim(),
    skills:         document.getElementById('skills').value.trim(),
    education: {
      degree:  document.getElementById('eduDegree').value.trim(),
      college: document.getElementById('eduCollege').value.trim(),
      year:    document.getElementById('eduYear').value.trim(),
      grade:   document.getElementById('eduGrade').value.trim(),
    },
    experiences,
    projects,
    certifications: document.getElementById('certifications').value.trim(),
  };
}

// =====================================================================
// AI RESUME GENERATION (TEMPLATE-AWARE)
// =====================================================================

async function generateResumeWithAI(data) {
  const tpl     = TEMPLATE_STYLES[selectedTemplate];
  const expText = data.experiences.map(e =>
    `- Role: ${e.role || 'N/A'} at ${e.company || 'N/A'}\n  Description: ${e.desc || 'N/A'}`
  ).join('\n');
  const projText = data.projects.map(p =>
    `- Project: ${p.name || 'N/A'}\n  Description: ${p.desc || 'N/A'}`
  ).join('\n');

  const prompt = `You are a professional resume writer. Create an ATS-optimized resume using the "${tpl.name}" template style.

TEMPLATE STYLE INSTRUCTIONS: ${tpl.aiInstruction}

CANDIDATE DATA:
Name: ${data.fullName}
Target Role: ${data.jobRole}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location || 'Not specified'}
Skills: ${data.skills}
Education: ${data.education.degree} from ${data.education.college} (${data.education.year}) ${data.education.grade ? '| ' + data.education.grade : ''}
Work Experience:
${expText || 'No experience provided'}
Projects:
${projText || 'No projects provided'}
Certifications: ${data.certifications || 'None'}

Return ONLY this JSON (no markdown, no extra text):
{
  "summary": "3-sentence professional summary tailored to ${tpl.name} style",
  "skillsList": ["skill1", "skill2", "skill3"],
  "experiences": [{"role": "...", "company": "...", "bullets": ["...", "...", "..."]}],
  "projects": [{"name": "...", "bullets": ["...", "..."]}],
  "certifications": ["..."]
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      model:      'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages:   [{ role: 'user', content: prompt }]
    })
  });

  const result = await response.json();
  const text   = result.content?.map(c => c.text || '').join('') || '';
  const clean  = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

// =====================================================================
// FALLBACK LOCAL GENERATION (No API)
// =====================================================================

function generateResumeLocal(data) {
  const skillsList   = data.skills.split(',').map(s => s.trim()).filter(Boolean);
  const actionVerbs  = ['Led', 'Developed', 'Built', 'Designed', 'Implemented', 'Delivered', 'Managed', 'Improved', 'Created'];

  const experiences = data.experiences.map(e => {
    const bullets = e.desc
      ? e.desc.split(/[.\n]/).filter(s => s.trim().length > 10).slice(0, 3).map(s => {
          const verb  = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
          const clean = s.trim().replace(/^[a-z]/, c => c.toUpperCase());
          return clean.startsWith(verb) ? clean : `${verb} ${clean.charAt(0).toLowerCase() + clean.slice(1)}`;
        })
      : [`Contributed to ${e.company || 'the organization'} as ${e.role || 'a team member'}`];
    return { role: e.role || 'Professional', company: e.company || '', bullets };
  });

  const projects = data.projects.map(p => {
    const bullets = p.desc
      ? p.desc.split(/[.\n]/).filter(s => s.trim().length > 8).slice(0, 2).map(s => s.trim())
      : [`Built and deployed ${p.name || 'a technical project'}`];
    return { name: p.name || 'Personal Project', bullets };
  });

  const certs = data.certifications
    ? data.certifications.split(/[,\n]/).map(c => c.trim()).filter(Boolean)
    : [];

  const summary = `Results-driven ${data.jobRole} with proven expertise in ${skillsList.slice(0, 3).join(', ')}. ${
    data.experiences.length
      ? `Demonstrated track record of delivering impactful solutions at ${data.experiences[0]?.company || 'leading organizations'}.`
      : 'Passionate about building high-quality solutions and driving measurable outcomes.'
  } Seeking to leverage technical skills and collaborative mindset to drive innovation and business growth.`;

  return { summary, skillsList, experiences, projects, certifications: certs };
}

// =====================================================================
// APPLY TEMPLATE STYLES TO RESUME DOCUMENT
// =====================================================================

function applyTemplateToResume(templateKey) {
  const doc = document.getElementById('resume-doc');
  doc.setAttribute('data-template', templateKey);

  if (templateKey === 'two-column') {
    applyTwoColumnLayout(doc);
  }

  const tpl         = TEMPLATE_STYLES[templateKey];
  const outputBadge = document.getElementById('outputTemplateBadge');
  if (outputBadge) {
    outputBadge.innerHTML = `
      <span style="display:inline-flex; align-items:center; gap:5px;
        background:${tpl.accentPale}; border:1px solid ${tpl.accent}30;
        color:${tpl.accent}; font-size:11px; font-weight:700;
        padding:4px 12px; border-radius:100px;">
        ${tpl.emoji} ${tpl.name}
      </span>`;
  }
}

function applyTwoColumnLayout(doc) {
  const summarySection = doc.querySelector('.resume-section:has(.resume-summary)');
  const skillsSection  = doc.querySelector('.resume-section:has(.skills-grid)');
  const otherSections  = [...doc.querySelectorAll('.resume-section')].filter(s =>
    !s.querySelector('.resume-summary') && !s.querySelector('.skills-grid')
  );

  const existing = doc.querySelector('.resume-body-columns');
  if (existing) existing.remove();

  const twoCol  = document.createElement('div');
  twoCol.className = 'resume-body-columns';

  const leftCol  = document.createElement('div');
  leftCol.className = 'resume-column-left';
  if (summarySection) leftCol.appendChild(summarySection.cloneNode(true));
  if (skillsSection)  leftCol.appendChild(skillsSection.cloneNode(true));

  const rightCol = document.createElement('div');
  rightCol.className = 'resume-column-right';
  otherSections.forEach(s => rightCol.appendChild(s.cloneNode(true)));

  twoCol.appendChild(leftCol);
  twoCol.appendChild(rightCol);

  [...doc.querySelectorAll('.resume-section')].forEach(s => s.remove());
  doc.appendChild(twoCol);
}

// =====================================================================
// RENDER RESUME
// =====================================================================

function renderResume(data, ai) {
  const doc = document.getElementById('resume-doc');

  const expHTML = ai.experiences.map(e => `
    <div class="exp-entry">
      <div class="exp-header">
        <div>
          <div class="exp-role">${e.role}</div>
          <div class="exp-company">${e.company}</div>
        </div>
      </div>
      <ul class="exp-bullets">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const projHTML = ai.projects.map(p => `
    <div class="proj-entry">
      <div class="exp-role" style="margin-bottom:4px;">${p.name}</div>
      <ul class="exp-bullets">
        ${p.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const certHTML = ai.certifications.length
    ? `<div class="resume-section">
        <div class="resume-section-title">Certifications</div>
        <ul class="cert-list">${ai.certifications.map(c => `<li>${c}</li>`).join('')}</ul>
       </div>`
    : '';

  const eduHTML = (data.education.degree || data.education.college)
    ? `<div class="resume-section">
        <div class="resume-section-title">Education</div>
        <div class="edu-entry">
          <div>
            <div class="edu-degree">${data.education.degree || 'Degree'}</div>
            <div class="edu-school">${data.education.college || ''}${data.education.grade ? ' · ' + data.education.grade : ''}</div>
          </div>
          <div class="edu-year">${data.education.year || ''}</div>
        </div>
       </div>`
    : '';

  doc.innerHTML = `
    <div class="resume-header-section">
      <div class="resume-name">${data.fullName}</div>
      <div class="resume-target-role">${data.jobRole}</div>
      <div class="resume-contact">
        ${data.email    ? `<span class="resume-contact-item">📧 ${data.email}</span>`    : ''}
        ${data.phone    ? `<span class="resume-contact-item">📱 ${data.phone}</span>`    : ''}
        ${data.location ? `<span class="resume-contact-item">📍 ${data.location}</span>` : ''}
      </div>
    </div>
    <div class="resume-section">
      <div class="resume-section-title">Professional Summary</div>
      <div class="resume-summary">${ai.summary}</div>
    </div>
    <div class="resume-section">
      <div class="resume-section-title">Core Skills</div>
      <div class="skills-grid">
        ${ai.skillsList.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
    ${expHTML  ? `<div class="resume-section"><div class="resume-section-title">Work Experience</div>${expHTML}</div>`  : ''}
    ${projHTML ? `<div class="resume-section"><div class="resume-section-title">Projects</div>${projHTML}</div>` : ''}
    ${eduHTML}
    ${certHTML}
  `;

  applyTemplateToResume(selectedTemplate);
}

// =====================================================================
// LOADING ANIMATION
// =====================================================================

function runLoadingSteps() {
  const steps = ['step1', 'step2', 'step3', 'step4'];
  let i       = 0;
  steps.forEach(s => document.getElementById(s).className = 'loading-step');

  const interval = setInterval(() => {
    if (i > 0) document.getElementById(steps[i - 1]).className = 'loading-step done';
    if (i < steps.length) {
      document.getElementById(steps[i]).className = 'loading-step active';
      i++;
    } else {
      clearInterval(interval);
    }
  }, 600);
  return interval;
}

// =====================================================================
// MAIN GENERATE FUNCTION
// =====================================================================

async function generateResume() {
  if (!validateForm()) return;

  const overlay  = document.getElementById('loadingOverlay');
  overlay.classList.add('show');
  const interval = runLoadingSteps();
  const data     = collectFormData();

  try {
    let aiData;
    try {
      aiData = await generateResumeWithAI(data);
    } catch (e) {
      console.warn('AI API failed, using local generation:', e);
      aiData = generateResumeLocal(data);
    }

    clearInterval(interval);
    setTimeout(() => {
      ['step1', 'step2', 'step3', 'step4'].forEach(s => {
        document.getElementById(s).className = 'loading-step done';
      });
    }, 200);

    setTimeout(() => {
      overlay.classList.remove('show');
      renderResume(data, aiData);
      showPage('output-page');
    }, 600);

  } catch (err) {
    clearInterval(interval);
    overlay.classList.remove('show');
    alert('Something went wrong. Please try again.');
    console.error(err);
  }
}

// =====================================================================
// PDF DOWNLOAD (TEMPLATE-AWARE)
// =====================================================================

async function downloadPDF() {
  const btn = document.querySelector('.btn-download');
  btn.textContent = '⏳ Generating PDF…';
  btn.disabled    = true;

  try {
    const { jsPDF }    = window.jspdf;
    const doc          = new jsPDF({ format: 'a4', unit: 'mm' });
    const tpl          = TEMPLATE_STYLES[selectedTemplate];
    const resumeDoc    = document.getElementById('resume-doc');
    const name         = document.getElementById('fullName')?.value || 'Resume';
    const role         = document.getElementById('jobRole')?.value || '';
    const email        = document.getElementById('email')?.value || '';
    const phone        = document.getElementById('phone')?.value || '';
    const location     = document.getElementById('location')?.value || '';

    let y        = 20;
    const margin = 20;
    const pageW  = 210 - margin * 2;

    const hexToRgb = hex => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return [r, g, b];
    };

    const isDark = selectedTemplate === 'tech';
    const isExec = selectedTemplate === 'executive' || selectedTemplate === 'professional';

    // Header block
    if (isExec) {
      doc.setFillColor(15, 31, 61);
      doc.rect(0, 0, 210, 42, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(255, 255, 255);
      doc.text(name, margin, 18);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(147, 197, 253);
      doc.text(role, margin, 26);
      doc.setFontSize(9);
      doc.setTextColor(200, 200, 220);
      doc.text([email, phone, location].filter(Boolean).join('  |  '), margin, 33);
      y = 52;
    } else {
      const accentHex  = tpl.accent.length === 7 ? tpl.accent : '#1a56db';
      const [ar, ag, ab] = hexToRgb(accentHex);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(15, 31, 61);
      doc.text(name, margin, y); y += 8;
      doc.setFontSize(11);
      doc.setTextColor(ar, ag, ab);
      doc.text(role, margin, y); y += 6;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text([email, phone, location].filter(Boolean).join('  |  '), margin, y); y += 4;
      const titleHex     = tpl.accent.length === 7 ? tpl.accent : '#0f1f3d';
      const [dr, dg, db] = hexToRgb(titleHex);
      doc.setDrawColor(dr, dg, db);
      doc.setLineWidth(0.6);
      doc.line(margin, y, 210 - margin, y); y += 8;
    }

    const sectionHex   = tpl.sectionTitleColor.length === 7 ? tpl.sectionTitleColor : '#1a56db';
    const [sr, sg, sb] = hexToRgb(sectionHex);

    // Summary
    const summary = resumeDoc.querySelector('.resume-summary')?.innerText || '';
    if (summary) {
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(sr, sg, sb);
      doc.text('PROFESSIONAL SUMMARY', margin, y); y += 5;
      doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(51, 65, 85);
      const sumLines = doc.splitTextToSize(summary, pageW);
      doc.text(sumLines, margin, y); y += sumLines.length * 5 + 6;
    }

    // Skills
    const skillTags = [...resumeDoc.querySelectorAll('.skill-tag')].map(t => t.innerText);
    if (skillTags.length) {
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(sr, sg, sb);
      doc.text('CORE SKILLS', margin, y); y += 5;
      doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(51, 65, 85);
      const skillLine = doc.splitTextToSize(skillTags.join(' · '), pageW);
      doc.text(skillLine, margin, y); y += skillLine.length * 5 + 6;
    }

    // Work Experience
    const expEntries = [...resumeDoc.querySelectorAll('.exp-entry')];
    if (expEntries.length) {
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(sr, sg, sb);
      doc.text('WORK EXPERIENCE', margin, y); y += 5;
      expEntries.forEach(entry => {
        const entryRole    = entry.querySelector('.exp-role')?.innerText    || '';
        const entryCompany = entry.querySelector('.exp-company')?.innerText || '';
        doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(15, 31, 61);
        doc.text(entryRole, margin, y); y += 5;
        doc.setFont('helvetica', 'italic'); doc.setFontSize(10); doc.setTextColor(sr, sg, sb);
        doc.text(entryCompany, margin, y); y += 5;
        const bullets = [...entry.querySelectorAll('.exp-bullets li')].map(li => li.innerText);
        bullets.forEach(b => {
          doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(51, 65, 85);
          const bLines = doc.splitTextToSize('• ' + b, pageW - 4);
          if (y + bLines.length * 5 > 270) { doc.addPage(); y = 20; }
          doc.text(bLines, margin + 2, y); y += bLines.length * 5 + 1;
        });
        y += 4;
      });
    }

    // Projects
    const projEntries = [...resumeDoc.querySelectorAll('.proj-entry')];
    if (projEntries.length) {
      if (y > 240) { doc.addPage(); y = 20; }
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(sr, sg, sb);
      doc.text('PROJECTS', margin, y); y += 5;
      projEntries.forEach(entry => {
        const pname = entry.querySelector('.exp-role')?.innerText || '';
        doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(15, 31, 61);
        doc.text(pname, margin, y); y += 5;
        const bullets = [...entry.querySelectorAll('.exp-bullets li')].map(li => li.innerText);
        bullets.forEach(b => {
          doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(51, 65, 85);
          const bLines = doc.splitTextToSize('• ' + b, pageW - 4);
          if (y + bLines.length * 5 > 270) { doc.addPage(); y = 20; }
          doc.text(bLines, margin + 2, y); y += bLines.length * 5 + 1;
        });
        y += 3;
      });
    }

    // Education
    const eduDeg = document.getElementById('eduDegree')?.value;
    const eduCol = document.getElementById('eduCollege')?.value;
    const eduYr  = document.getElementById('eduYear')?.value;
    if (eduDeg || eduCol) {
      if (y > 250) { doc.addPage(); y = 20; }
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(sr, sg, sb);
      doc.text('EDUCATION', margin, y); y += 5;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(15, 31, 61);
      doc.text(eduDeg || '', margin, y);
      doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(100, 116, 139);
      doc.text(eduYr || '', 190, y, { align: 'right' }); y += 5;
      doc.text(eduCol || '', margin, y); y += 8;
    }

    doc.save(`${name.replace(/\s+/g, '_')}_${TEMPLATE_STYLES[selectedTemplate].name}_Resume.pdf`);

  } catch (err) {
    console.error('PDF error:', err);
    alert('PDF generation failed. Please try again.');
  }

  btn.innerHTML = '⬇️ Download PDF';
  btn.disabled  = false;
}

// =====================================================================
// SHARE FUNCTIONS
// =====================================================================

function getShareText() {
  const name    = document.getElementById('fullName')?.value?.trim() || '';
  const role    = document.getElementById('jobRole')?.value?.trim()  || 'my dream role';
  const tpl     = TEMPLATE_STYLES[selectedTemplate]?.name || 'Professional';
  const nameStr = name ? `${name}'s` : 'my';
  return `🚀 Just built ${nameStr} AI-powered resume for ${role} in under 60 seconds!\n\n✅ ATS-Optimized & job-ready\n✅ ${tpl} template — designed by AI\n✅ Zero design skills needed\n\n🔥 Build yours FREE → https://resumix.app\n\n#ResumeAI #AIResume #JobHunting #CareerGoals #HireMe`;
}

function getShortShareText() {
  const role = document.getElementById('jobRole')?.value?.trim() || 'my dream role';
  return `🚀 Built my ATS-optimized resume for ${role} in 60 seconds with Resumix — powered by Claude AI! Try it free 👉 https://resumix.app #ResumeAI #AI #Jobs #Career`;
}

function toggleShareMenu(e) {
  e.stopPropagation();
  document.getElementById('shareDropdown').classList.toggle('open');
}

function closeShareMenu() {
  document.getElementById('shareDropdown').classList.remove('open');
}

function shareToWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}`, '_blank');
  closeShareMenu();
  showShareToast('📱 Opening WhatsApp…');
}

function shareToInstagram() {
  const caption = `🚀 Just built my AI resume in 60 seconds with Resumix!\n\n✅ ATS-Optimized\n✅ Professionally designed by AI\n✅ PDF ready to send\n\n🔥 Build yours FREE → resumix.app\n\n#ResumeAI #AIResume #JobHunting #CareerGoals #AI #Resume #JobSearch #HireMe #CareerTips #Fresher #Jobs`;
  navigator.clipboard.writeText(caption)
    .then(() => {
      closeShareMenu();
      showShareToast('📋 Caption copied! Paste it on Instagram ✨');
      setTimeout(() => window.open('https://www.instagram.com/', '_blank'), 900);
    })
    .catch(() => { prompt('Copy this caption for Instagram:', caption); closeShareMenu(); });
}

function shareToLinkedIn() {
  const url = encodeURIComponent('https://resumix.app');
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  closeShareMenu();
  showShareToast('💼 Opening LinkedIn…');
}

function shareToTwitter() {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShortShareText())}`, '_blank');
  closeShareMenu();
  showShareToast('🐦 Opening Twitter / X…');
}

function copyShareLink() {
  navigator.clipboard.writeText(getShareText())
    .then(() => { closeShareMenu(); showShareToast('✅ Message copied to clipboard!'); })
    .catch(() => { prompt('Copy this message:', getShareText()); closeShareMenu(); });
}

function showShareToast(msg) {
  document.querySelectorAll('.share-toast').forEach(t => t.remove());
  const toast       = document.createElement('div');
  toast.className   = 'share-toast';
  toast.innerHTML   = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity    = '0';
    toast.style.transform  = 'translateX(-50%) translateY(8px)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// =====================================================================
// VOICE MODE
// =====================================================================

function initVoiceStars() {
  const container = document.getElementById('voiceStars');
  if (!container || container.children.length > 0) return;
  for (let i = 0; i < 80; i++) {
    const star       = document.createElement('div');
    star.className   = 'voice-star';
    const bright     = 0.3 + Math.random() * 0.6;
    const size       = Math.random() > 0.8 ? 3 : 2;
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${2 + Math.random() * 4}s;
      --delay: ${Math.random() * 4}s;
      --bright: ${bright};
      width: ${size}px;
      height: ${size}px;
    `;
    container.appendChild(star);
  }
}

function toggleRecording() {
  if (!isRecording) startRecording();
  else              stopRecording();
}

function startRecording() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showVoiceError(); return; }

  recognition                 = new SpeechRecognition();
  recognition.continuous      = true;
  recognition.interimResults  = true;
  recognition.lang            = 'en-IN';

  recognition.onstart = () => { isRecording = true; updateMicUI(true); };

  recognition.onresult = event => {
    let interim = '';
    let final   = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) final  += t + ' ';
      else                           interim += t;
    }
    if (final) fullTranscript += final;
    updateTranscriptDisplay(fullTranscript + interim);
  };

  recognition.onerror = e => {
    if (e.error === 'not-allowed') {
      updateMicUI(false);
      isRecording = false;
      setMicStatus('Microphone access denied. Please allow microphone.', '');
    }
  };

  recognition.onend = () => {
    if (isRecording) { try { recognition.start(); } catch (e) {} }
  };

  try { recognition.start(); } catch (e) { console.error(e); }
}

function stopRecording() {
  isRecording = false;
  if (recognition) { recognition.stop(); recognition = null; }
  updateMicUI(false);
  if (fullTranscript.trim()) {
    setMicStatus('Processing with AI…', 'processing');
    parseTranscriptWithAI(fullTranscript);
  }
}

function updateMicUI(recording) {
  const btn      = document.getElementById('micBtn');
  const icon     = document.getElementById('micIcon');
  const waveform = document.getElementById('waveform');
  const rings    = document.querySelectorAll('.mic-ring');

  if (recording) {
    btn.classList.add('recording');
    icon.textContent = '⏹️';
    waveform.classList.add('active');
    rings.forEach(r => r.classList.add('active'));
    setMicStatus('Listening… speak naturally', 'recording');
  } else {
    btn.classList.remove('recording');
    icon.textContent = '🎙️';
    waveform.classList.remove('active');
    rings.forEach(r => r.classList.remove('active'));
  }
}

function updateTranscriptDisplay(text) {
  const box = document.getElementById('transcriptBox');
  const el  = document.getElementById('transcriptText');
  if (text.trim()) {
    el.className  = 'transcript-text';
    el.textContent = text;
    box.classList.add('has-text');
  }
}

function setMicStatus(msg, type) {
  const el    = document.getElementById('micStatus');
  el.textContent = msg;
  el.className   = 'mic-status' + (type ? ' ' + type : '');
}

async function parseTranscriptWithAI(transcript) {
  setMicStatus('🤖 AI is extracting your details…', 'processing');

  const prompt = `You are an expert resume data extractor. Extract resume information from this spoken text.
Spoken text: "${transcript}"
Return ONLY a JSON object (no markdown):
{"fullName":"","email":"","phone":"","location":"","jobRole":"","skills":"","eduDegree":"","eduCollege":"","eduYear":"","eduGrade":"","experience":[{"role":"","company":"","desc":""}],"projects":[{"name":"","desc":""}],"certifications":""}
Extract only what is clearly mentioned. Leave fields empty if not mentioned.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        model:    'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const result    = await response.json();
    const text      = result.content?.map(c => c.text || '').join('') || '';
    parsedVoiceData = JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch (e) {
    console.warn('AI parse failed, using local:', e);
    parsedVoiceData = parseTranscriptLocal(transcript);
  }

  showParsedPreview(parsedVoiceData);
  setMicStatus('✓ Details extracted! Review and auto-fill.', 'success');
  document.getElementById('voiceFillBtn').disabled = false;
}

function parseTranscriptLocal(text) {
  const data = {
    fullName: '', email: '', phone: '', location: '', jobRole: '',
    skills: '', eduDegree: '', eduCollege: '', eduYear: '', eduGrade: '',
    experience: [], projects: [], certifications: ''
  };

  const nameM  = text.match(/(?:my name is|i(?:'m| am)|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3})/i);
  if (nameM) data.fullName = nameM[1].trim();

  const emailM = text.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);
  if (emailM) data.email = emailM[0];

  const phoneM = text.match(/(?:\+91[\s\-]?)?[6-9]\d{9}|\b\d{10}\b/);
  if (phoneM) data.phone = phoneM[0];

  const locM   = text.match(/(?:from|in|at|based in|living in)\s+([A-Z][a-z]+(?:,\s*[A-Z][a-z]+)?)/);
  if (locM) data.location = locM[1];

  const roleM  = text.match(/(?:i(?:'m| am)|working as|applying for|job as)\s+(?:a\s+)?([A-Za-z\s]+?(?:Engineer|Developer|Manager|Designer|Analyst|Lead|Scientist|Intern|Consultant|Architect))/i);
  if (roleM) data.jobRole = roleM[1].trim();

  const skillsM = text.match(/(?:skills?\s*(?:are|include|:)?|know|proficient in)\s+([^.!?\n]{10,120})/i);
  if (skillsM) data.skills = skillsM[1].replace(/\band\b/gi, ',').trim();

  const degM   = text.match(/(b\.?tech|m\.?tech|bsc|msc|mba|phd|bachelor|master)[^,.\n]{0,40}/i);
  if (degM) data.eduDegree = degM[0].trim();

  const colM   = text.match(/(?:from|at)\s+([A-Z][a-zA-Z\s]+?(?:University|Institute|College|IIT|NIT|BITS|IIIT)[a-zA-Z\s]*?)(?:\s+in\s+\d{4}|[,.]|$)/i);
  if (colM) data.eduCollege = colM[1].trim();

  const yrM    = text.match(/(?:graduated?|passed out|batch)\s+(?:in\s+)?(20\d{2})/i);
  if (yrM) data.eduYear = yrM[1];

  const grM    = text.match(/(\d+\.?\d*)\s*(?:cgpa|gpa)/i) || text.match(/(\d+\.?\d*)\s*(?:%|percent)/i);
  if (grM) data.eduGrade = grM[1] + (text.toLowerCase().includes('cgpa') ? ' CGPA' : '%');

  const expM   = text.match(/(?:worked? at|working at)\s+([A-Z][a-zA-Z\s&]+?)(?:\s+as\s+|\s+for\s+|[,.])/gi);
  if (expM) {
    expM.forEach(m => {
      const c = m.match(/(?:worked? at|working at)\s+([A-Z][a-zA-Z\s&]+?)(?:\s+as|\s+for|[,.])/i);
      if (c) data.experience.push({ role: 'Professional', company: c[1].trim(), desc: '' });
    });
  }

  return data;
}

function showParsedPreview(data) {
  document.getElementById('parsedPreview').classList.add('show');

  const items = [
    { label: 'Name',       value: data.fullName  },
    { label: 'Target Role',value: data.jobRole   },
    { label: 'Email',      value: data.email     },
    { label: 'Phone',      value: data.phone     },
    { label: 'Location',   value: data.location  },
    { label: 'Skills',     value: data.skills    },
    { label: 'Degree',     value: data.eduDegree },
    { label: 'College',    value: data.eduCollege},
    { label: 'Year',       value: data.eduYear   },
    {
      label: 'Experience',
      value: data.experience?.length
        ? data.experience.map(e => `${e.role}${e.company ? ' @ ' + e.company : ''}`).join(', ')
        : ''
    },
  ].filter(i => i.value);

  document.getElementById('parsedFields').innerHTML = items.map((item, i) => `
    <div class="parsed-field" style="animation-delay:${i * 0.05}s">
      <div class="parsed-field-label">${item.label}</div>
      <div class="parsed-field-value">${item.value || ''}</div>
    </div>
  `).join('');
}

function fillFormFromVoice() {
  if (!parsedVoiceData) return;
  const d   = parsedVoiceData;
  const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };

  set('fullName',       d.fullName);
  set('email',          d.email);
  set('phone',          d.phone);
  set('location',       d.location);
  set('jobRole',        d.jobRole);
  set('skills',         d.skills);
  set('eduDegree',      d.eduDegree);
  set('eduCollege',     d.eduCollege);
  set('eduYear',        d.eduYear);
  set('eduGrade',       d.eduGrade);
  set('certifications', d.certifications);

  if (d.experience?.length) {
    document.getElementById('expContainer').innerHTML = '';
    expCount = 0;
    d.experience.forEach(e => addExperience(e.role || '', e.company || '', e.desc || ''));
  }

  if (d.projects?.length) {
    document.getElementById('projContainer').innerHTML = '';
    projCount = 0;
    d.projects.forEach(p => addProject(p.name || '', p.desc || ''));
  }

  showPage('form-page');
  updateProgress();

  setTimeout(() => {
    const toast         = document.createElement('div');
    toast.className     = 'share-toast';
    toast.style.cssText += '; border:1px solid rgba(52,211,153,0.4);';
    toast.innerHTML     = '<span style="color:#34d399;font-size:18px;">✓</span> Form auto-filled from your voice!';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s';
      toast.style.opacity    = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }, 300);
}

function clearVoice() {
  fullTranscript  = '';
  parsedVoiceData = null;
  if (recognition) { recognition.stop(); recognition = null; }
  isRecording = false;
  updateMicUI(false);

  const el      = document.getElementById('transcriptText');
  el.className  = 'transcript-text placeholder';
  el.textContent = 'Your words will appear here as you speak…';
  document.getElementById('transcriptBox').classList.remove('has-text');
  document.getElementById('parsedPreview').classList.remove('show');
  document.getElementById('voiceFillBtn').disabled = true;
  setMicStatus('Click the mic to start speaking', '');
}

function showVoiceError() {
  document.querySelector('.mic-area').innerHTML = `
    <div style="text-align:center; padding:32px 24px; color:rgba(255,255,255,0.5);">
      <div style="font-size:48px; margin-bottom:16px;">😔</div>
      <h3 style="color:white; font-size:18px; margin-bottom:8px;">Voice Not Supported</h3>
      <p style="font-size:14px; line-height:1.6;">Your browser doesn't support voice recognition.<br>Please use Chrome, Edge, or Safari.</p>
      <button onclick="showPage('form-page')"
        style="margin-top:20px; background:#1a56db; color:white; border:none; padding:12px 28px; border-radius:100px; font-size:14px; font-weight:600; cursor:pointer;">
        ← Fill Form Manually
      </button>
    </div>`;
}

// =====================================================================
// EVENT LISTENERS
// =====================================================================

// Close share dropdown on outside click
document.addEventListener('click', e => {
  const wrap = document.getElementById('shareWrap');
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById('shareDropdown').classList.remove('open');
  }
});

// Progress bar on form input
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm');
  if (form) form.addEventListener('input', updateProgress);
});

// =====================================================================
// INIT
// =====================================================================

buildTemplatePreviews();
selectTemplate('modern');
addExperience();
addProject();
