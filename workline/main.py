import os
import sys
from pathlib import Path

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from step1_generator import sourceToTable, enrich_function
from step2_init import initproject, removeDB
from harness import harness, analysis
from mutation import mutation
from loopProject import loopProject

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from utils.worklineConfig import Hparams
import time

if __name__ == '__main__':
    hparams = Hparams().parser.parse_args()
    # init databases
    # try:
    #     cmd = "python3 /root/comfuzz/comfuzz_js/web/manage.py makemigrations && python3  " \
    #           "/root/comfuzz/comfuzz_js/web/manage.py migrate"
    #     os.system(cmd)
    # except Exception as e:
    #     print('init databases success!')
    # # clean project database
    # if hparams.clean_project:
    #     removeDB = removeDB()
    #     removeDB.run()
    #     print("*" * 10 + "clean database success!" + "*" * 10)
    #
    # # step1 generator
    # sourcetotable = sourceToTable()
    # enrichfunction = enrich_function()
    # generator_start = time.time()
    # sourcetotable.run(js_dir=sourcetotable.js_dir)
    # print('source To Table is used:', int(time.time() - generator_start), 's')
    # enrichfunction.run(limit_num=hparams.enrich_limit_num)
    # print('enrich function is used:', int(time.time() - generator_start), 's')
    #
    # step2 init
    initproject = initproject()
    initproject.run()

    # # step3 harness
    harness = harness()

    # mutation
    mutation = mutation()
    # step4 loop
    loop_times = 0
    interesting_times = 0
    Fuzzing_times = 0
    while True:
        loopProject = loopProject(interesting_times, Fuzzing_times)
        list_interesting, len_list_interesting = loopProject.run()
        ## 如果返回长度是0，那么就将looptimes回归1 再继续
        if len_list_interesting == 0 or loop_times == hparams.loop_times:
            interesting_times = 0
            Fuzzing_times = 1
        ## 如果返回长度不是0 那么就直接给harness进行测试
        else:
            harness.run(list_unharness=list_interesting)
            interesting_times = 1
            Fuzzing_times = 1
            loop_times += 1

        if interesting_times == 1 and Fuzzing_times == 1:
            mutation.run('special', interesting_times, Fuzzing_times)
            harness.run(harness.list_11())
        elif interesting_times == 0 and Fuzzing_times == 1:
            mutation.run('universal', interesting_times, Fuzzing_times)
            harness.run(harness.list_01())