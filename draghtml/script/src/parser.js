export default class Parser {
	constructor (props) {
	    this.dataList = props.data
        this.text = props.config.richText ? props.config.richText.html.slice(3, props.config.richText.html.length - 4) : ''
        this._html = ''
	}
	render (txt) {
	    let st = txt.indexOf('<a href="">');
        let end = txt.indexOf('</a>') + 4;
        //如果不是三元运算符
        if (st === -1) {
            this._html += this.evalue(txt)
        } else {
            //处理三元运算符情况
            this._html += this.evalue(txt.slice(0,st))
            let expression = this.rCode(txt.slice(st,end))
            expression = expression.replace(/&gt;/g,'>').replace(/&lt;/g,'<')
            expression = expression.split('?');
            let cdt = expression[0].replace(/&amp;/g,'&').replace(/&nbsp;/g, '')
            cdt = this.evalue(cdt)
            let option = expression[1].split('&amp;')
            let op_1 = this.evalue(option[0])
            let op_2 = this.evalue(option[1])
            let exp = `${cdt} ? '${op_1}' : '${op_2}'`
            console.info('exp', exp)
            this._html += eval(exp)
            if (txt.slice(end).length !== 0) {
                this.render(txt.slice(end))
            }
        }
        return '<p>' + this._html + '</p>'
	}
	//利用递归对文本进行替换
	evalue (txt) {
        switch (true) {
            //处理月日等情况 (${dt_name} - 2)
            case /\(\s*\S+\s*\)\%*/.test(txt):
                let c_res = txt.match(/\(\s*\S+\s*\)\%*/) || ['${}']
                let c_key = this.rWrap(c_res[0].match(/\${\w+}/)[0])
                let exp = txt.match(/\(\s*\S+\s*\)/)
                let c_num = c_key === 'wk_name' ? String(this.dataList[c_key]) : Number(this.dataList[c_key])
                exp = exp[0].replace(/\${\w+}/, c_num)
                if (c_key !== 'wk_name') {
                    exp = eval(exp)
                }
                txt = /\(\s*\S+\s*\)\%/.test(txt) ? txt.replace(/\(\s*\S+\s*\)\%/, eval(`${exp}*100`) + '%') : txt.replace(/\(\s*\S+\s*\)/, exp)
                txt = this.evalue(txt)
                return txt;
            //处理百分号和绝对值. /${dt}/%
            case /\/\${\w+}\/\%/.test(txt):
                let b_res = txt.match(/\/\${\w+}\/\%/) || ['${}']
                let b_key = this.rWrap(b_res[0]).replace('%', '').replace(/\//g,'')
                let b_num = Number(this.dataList[b_key]) * 100
                txt = txt.replace(/\/\${\w+}\/\%/, `${Math.abs(Math.round(b_num))}%`)
                txt = this.evalue(txt)
                return txt;
            //处理绝对值情况 ／${dt}/
            case /\/\s*\${\w+}\s*\//.test(txt):
                let a_res = txt.match(/\/\s*\${\w+}\s*\//) || ['${}']
                let a_key = this.rWrap(a_res[0]).replace(/\//g,'')
                let a_num = Number(this.dataList[a_key])
                txt = txt.replace(/\/\s*\${\w+}\s*\//, Math.abs(a_num.toFixed(2)))
                txt = this.evalue(txt)
                return txt;
            //处理百分号情况. ${dt}%
            case /\${\w+}\%/.test(txt):
                let p_res = txt.match(/\${\w+}\%/) || ['${}']
                let p_key = this.rWrap(p_res[0]).replace('%', '')
                let p_num = Number(this.dataList[p_key]) * 100
                txt = txt.replace(/\${\w+}\%/, `${p_num.toFixed(2)}%`)
                txt = this.evalue(txt)
                return txt;
            case /\${\w+}/.test(txt):
                let res = txt.match(/\${\w+}/) || ['${}']
                let key = this.rWrap(res[0])
                let num = Number(this.dataList[key])
                txt = txt.replace(/\${\w+}/, num.toFixed(2))
                txt = this.evalue(txt)
                return txt;
            default: return txt
        }
    }
    //replace<code>标签     
    rCode (code) {
        return code.replace('<a href="">','').replace('</a>','')
    }
    //replace${}
    rWrap (txt) {
        return txt.replace('$','').replace('{','').replace('}','')
    }
}
