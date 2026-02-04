import { createTheme } from 'tona'
import './style.css'

function blogTitle() {

  const div = document.createElement('div')
  div.textContent = 'The Ordinary!'
  div.className = 'tona-h1'

  const body = document.querySelector('body')
  body.prepend(div)
}

function setBlogLogo() {
  const header_title = document.getElementById('Header1_HeaderTitle')
  const blog_title = document.getElementById('blogTitle')

  const logo_title = document.createElement('span')
  logo_title.textContent = '关于我'
  logo_title.className = 'logo-title'
  blog_title.prepend(logo_title)
  header_title.innerText = ''

  const blog_logo = document.getElementById('blogLogo')
  blog_logo.removeAttribute('src')
  // TODO: 使用变量进行替换
  blog_logo.setAttribute('src', 'https://youke.xn--y7xa690gmna.cn/s1/2026/02/04/698256fb42dbe.webp')

  const about_me = document.getElementById('lnkBlogLogo')
  about_me.removeAttribute('href')
  // TODO: 使用变量进行替换
  about_me.setAttribute('href', 'https://github.com/Reagan1947')
}

function modify_footer() {

  const root_footer = document.getElementById('footer')

  const div = document.createElement('div')
  div.textContent = '© Theme frame from TONA | Powered by CNBLOG'
  div.className = 'custom-footer'
  root_footer.prepend(div)

}

function getQueryParam(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg); // "a=1&b=2" 这一段[web:2][web:7]
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

function getUrlWithPage(page) {
  const url = new URL(window.location.href);      // 当前完整 URL[web:15][web:36]
  const params = new URLSearchParams(url.search); // 解析查询参数[web:6][web:33]

  params.set('page', page);                       // 修改 / 新增 page[web:34][web:38]
  url.search = params.toString();                 // 把参数串写回 URL 对象[web:6][web:33]

  return url.href;                                // 这里就是你要的“变更后的地址字符串”
}

function checkUrl() {
  const url = window.location.href; // 或者用 location.pathname[web:68][web:76]
  return url.toLowerCase().endsWith('.html'); // endsWith 用于判断字符串结尾[web:74]
}

function initialPager() {
  const side_bar = document.getElementById('navigator')

  const next_page_span = document.createElement('a')
  next_page_span.textContent = '下一页'
  next_page_span.className = 'next-page'
  next_page_span.setAttribute('href', '#')

  const preview_page_span = document.createElement('a')
  preview_page_span.textContent = '上一页'
  preview_page_span.className = 'preview-page'
  preview_page_span.setAttribute('href', '#')

  const spliter_span = document.createElement('span')
  spliter_span.textContent = '|'
  spliter_span.className = 'page-spliter'

  side_bar.append(preview_page_span)
  side_bar.append(spliter_span)
  side_bar.append(next_page_span)

}

function processPager() {
  // 查找页面有无 下一页 id 元素
  const next_page_single = document.querySelector('#nav_next_page > a')

  // 查找页面有无 下一页 a 元素
  const next_page_navigator = Array.from(document.querySelectorAll('.pager > a')).find(a => a.textContent.trim() === '下一页');

  // 若有则展示下一页为可点击 否则为不可点击
  if (!(next_page_single || next_page_navigator)) {
    const next_page_button = document.querySelector('.next-page')
    next_page_button.classList.add('href-dsiabled')
  } else {
    if (next_page_single) {
      const next_page_button = document.querySelector('.next-page')
      const nex_page_link = next_page_single.getAttribute('href')
      next_page_button.classList.remove('href-dsiabled')
      next_page_button.removeAttribute('href')
      next_page_button.setAttribute('href', nex_page_link)
    } else if (next_page_navigator) {
      const next_page_button = document.querySelector('.next-page')
      const nex_page_link = next_page_navigator.getAttribute('href')
      next_page_button.classList.remove('href-dsiabled')
      next_page_button.removeAttribute('href')
      next_page_button.setAttribute('href', nex_page_link)
    }
  }

  // 查找页面有无上一页 a 元素
  const preview_page_navigator = Array.from(document.querySelectorAll('.pager > a')).find(a => a.textContent.trim() === '上一页');

  // 若有则上一页可点击 否则不可点击
  if (!preview_page_navigator) {
    const preview_page_button = document.querySelector('.preview-page')
    preview_page_button.classList.add('href-dsiabled')
  } else {
    const preview_page_button = document.querySelector('.preview-page')
    const preview_page_link = preview_page_navigator.getAttribute('href')
    preview_page_button.classList.remove('href-dsiabled')
    preview_page_button.removeAttribute('href')
    preview_page_button.setAttribute('href', preview_page_link)
  }
}

function processPostDesc() {
  const nodes = document.querySelectorAll('.postDesc');

  // 2. 匹配 yyyy-mm-dd 的正则（只提取第一个匹配）
  const dateReg = /\d{4}-\d{2}-\d{2}/;

  nodes.forEach(el => {
    const text = el.textContent || '';
    const match = text.match(dateReg);
    if (match) {
      // 3. 将元素文本更新为匹配到的日期
      el.textContent = match[0];
    }
  });
}

createTheme().use(blogTitle)
createTheme().use(setBlogLogo)
createTheme().use(modify_footer)
createTheme().use(initialPager)
createTheme().use(processPager)
createTheme().use(processPostDesc)


