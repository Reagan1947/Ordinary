import { createTheme } from 'tona'
import './style.css'

function blogTitle() {

  const div = document.createElement('div')
  div.textContent = 'hello Tona!'
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
  blog_logo.setAttribute('src', 'https://youke.xn--y7xa690gmna.cn/s1/2026/02/04/698256fb42dbe.webp')
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

function processPager() {
  const side_bar = document.getElementById('navigator')

  const next_page_span = document.createElement('a')
  next_page_span.textContent = '下一页'
  next_page_span.className = 'next-page'
  next_page_span.setAttribute('href', '')

  const preview_page_span = document.createElement('a')
  preview_page_span.textContent = '上一页'
  preview_page_span.className = 'preview-page'
  preview_page_span.setAttribute('href', '')

  const spliter_span = document.createElement('span')
  spliter_span.textContent = '|'
  spliter_span.className = 'page-spliter'

  side_bar.append(preview_page_span)
  side_bar.append(spliter_span)
  side_bar.append(next_page_span)

}

function pageHelper() {
  // 获取当前页数 如果是第一页 则没有上一页
  var url = window.location.href;
  if (url) {
    // 从 URL 中获取参数信息
    const page = getQueryParam('page');
    if (page) {
      const day_items = document.querySelectorAll('.day')
      if (day_items.length > 0) {
        const next_url = getUrlWithPage(parseInt(page) + 1)
        document.querySelector('.next-page').setAttribute('href', next_url)
      } else {
        document.querySelector('.next-page').classList.add('href-dsiabled')

      }
      if (page <= 1) {
        document.querySelector('.preview-page').classList.add('href-dsiabled')
      } else {
        const preview_url = getUrlWithPage(page - 1)
        document.querySelector('.preview-page').setAttribute('href', preview_url)

      }
    } else {
      document.querySelector('.preview-page').classList.add('href-dsiabled')
      const next_page_url = getUrlWithPage(2)
      document.querySelector('.next-page').setAttribute('href', next_page_url)
    }
  }

  if (checkUrl()) {
    document.querySelector('.next-page').classList.add('display-none')
    document.querySelector('.preview-page').classList.add('display-none')
    document.querySelector('.page-spliter').classList.add('display-none')
  } else {
    document.querySelector('.next-page').classList.remove('display-none')
    document.querySelector('.preview-page').classList.remove('display-none')
    document.querySelector('.page-spliter').classList.remove('display-none')
  }
}

createTheme().use(blogTitle)
createTheme().use(setBlogLogo)
createTheme().use(modify_footer)
createTheme().use(processPager)
createTheme().use(pageHelper)


