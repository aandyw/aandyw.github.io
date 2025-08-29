import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'src')

export function getAllContent(type: string) {
  const typeDirectory = path.join(contentDirectory, type)
  if (!fs.existsSync(typeDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(typeDirectory)
  const allContentData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(typeDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        content,
        readingTime: stats.text,
        ...data,
      }
    })

  return allContentData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getContentBySlug(type: string, slug: string) {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      content,
      readingTime: stats.text,
      ...data,
    }
  } catch (error) {
    return null
  }
}

export function getContentSlugs(type: string) {
  const typeDirectory = path.join(contentDirectory, type)
  if (!fs.existsSync(typeDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(typeDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
