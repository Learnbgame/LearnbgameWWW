# 镧系和锕系未解决


filro = open("element.txt",'r')
filwo = open('data.js','w')

filwo.write('var WsbData = [\n')
for ele in filro.readlines():
	filwo.write('\t{\n')
	filwo.write('\ttype : \"'+str(ele.split(',')[0]).split(':')[-1] + '\",\n')
	filwo.write('\tauthor : "Fofight",\n')
	filwo.write('\ttitle : \"' + str(ele.split(',')[-1]).split()[0] +'",\n')
	filwo.write('\tdec : "JQuery案例；鼠标事件JQuery API 应用",\n')
	filwo.write('\ttime : \"'+str(ele.split(',')[0]).split(':')[0] + '\",\n')
	filwo.write('\tsrc : "3D Drag"\n')
	filwo.write('\t},\n')
 


filwo.write("];\n")

filro.close()
filwo.close()